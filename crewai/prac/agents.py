from crewai import Agent, LLM
import os

class SmartCityAgents:
    def summarization_agent(self):
        model = os.getenv('MODEL', 'gpt-4-turbo')
        return Agent(
            role='Summarization Agent',
            goal='Summarize raw complaints into a short, factual 1-2 sentence summary.',
            backstory="""You are an expert summarizer for city complaints. 
            Your job is to strip away emotional language and filler words, 
            leaving only the hard facts about the issue and its location.""",
            verbose=True,
            allow_delegation=False,
            llm=LLM(model=model, temperature=0.7)
        )

    def classification_agent(self):
        model = os.getenv('MODEL', 'gpt-4-turbo')
        return Agent(
            role='Classification Agent',
            goal='Classify the summarized complaint and assign severity and department.',
            backstory="""You are a city operations classification specialist. 
            You analyze summarized complaints to determine the specific issue type, 
            severity (HIGH, MEDIUM, LOW), and the responsible department. 
            You also write a clear operational description.""",
            verbose=True,
            allow_delegation=False,
            llm=LLM(model=model, temperature=0.7)
        )
