from crewai import Task

class SmartCityTasks:
    def summarize_task(self, agent, raw_complaint):
        return Task(
            description=f"""
            Analyze the following raw complaint text:
            "{raw_complaint}"
            
            1. Remove filler words, emotional tone, repetitions, and personal details.
            2. Convert the text into a short, professional summary (1-2 sentences max).
            3. Capture only the factual issue and location.
            
            Rules:
            - Do NOT add new information.
            - Do NOT change facts.
            - Do NOT include reasoning.
            """,
            expected_output="""
            JSON only with the following format:
            {
              "summary": "1-2 sentence professional summary"
            }
            """,
            agent=agent
        )

    def classify_task(self, agent):
        return Task(
            description="""
            Take the summary provided by the previous task context.
            
            1. Identify the type of urban issue.
            2. Assign severity level (HIGH, MEDIUM, LOW) based on:
               - HIGH: Risk to life, fire, accident, medical, law & order.
               - MEDIUM: Functional disruption affecting many.
               - LOW: Minor inconvenience.
            3. Assign the correct city department (Sanitation, Electricity, Water, Traffic, Emergency Services, Civil Works).
            4. Generate a clean operational description.
            
            Global Rules:
            - NEVER return explanations.
            - NEVER return markdown.
            - ALWAYS return valid JSON.
            """,
            expected_output="""
            JSON only with the following format:
            {
              "summary": "The summary from stage 1",
              "issue_type": "The detected issue category",
              "severity": "HIGH/MEDIUM/LOW",
              "department": "Assigned Department",
              "description": "Human-readable operational description"
            }
            """,
            agent=agent
        )
