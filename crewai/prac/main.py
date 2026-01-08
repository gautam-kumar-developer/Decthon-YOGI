import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from crewai import Crew, Process
from agents import SmartCityAgents
from tasks import SmartCityTasks
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

# --- Initialize FastAPI ---
app = FastAPI(title="Smart City Complaint Processing API")

# Allow frontend access (React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this to your frontend domain later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Pydantic Request Model ---
class ComplaintRequest(BaseModel):
    complaint: str

# --- Core Processing Logic (existing) ---
def run_complaint_process(raw_complaint: str):
    agents = SmartCityAgents()
    summarizer = agents.summarization_agent()
    classifier = agents.classification_agent()

    tasks = SmartCityTasks()
    summary_task = tasks.summarize_task(summarizer, raw_complaint)
    classify_task = tasks.classify_task(classifier)
    classify_task.context = [summary_task]

    crew = Crew(
        agents=[summarizer, classifier],
        tasks=[summary_task, classify_task],
        process=Process.sequential,
        verbose=True
    )

    result = crew.kickoff()
    return result

# --- Routes ---
@app.get("/health")
def health_check():
    return {"status": "ok", "message": "Smart City Complaint API running"}

@app.post("/process-complaint")
def process_complaint(data: ComplaintRequest):
    try:
        complaint_text = data.complaint.strip()
        if not complaint_text:
            raise HTTPException(status_code=400, detail="Complaint text cannot be empty")

        print(f"Processing complaint: {complaint_text}")
        result = run_complaint_process(complaint_text)

        # Try to extract the clean JSON result from the last task (classification)
        try:
            # Usually CrewAI returns the final JSON in `result["raw"]`
            import json

            if isinstance(result, dict) and "raw" in result:
                clean_data = json.loads(result["raw"])
            elif hasattr(result, "raw"):
                clean_data = json.loads(result.raw)
            else:
                # fallback to returning the whole thing if parsing fails
                clean_data = result

        except Exception as parse_error:
            print("Error parsing result JSON:", parse_error)
            clean_data = result

        return clean_data

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# --- Local Run ---
if __name__ == "__main__":
    import uvicorn
    print("🚀 Starting Smart City FastAPI Server...")
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
