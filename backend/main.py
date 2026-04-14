from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random

app = FastAPI(title="React Foundation API")

# CORS: allows React (port 5173) to call this backend (port 8000)
# Without this the browser blocks cross-origin requests entirely
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Models ---
class AnalyzeRequest(BaseModel):
    text: str

class AnalyzeResponse(BaseModel):
    sentiment: str
    score: float
    word_count: int

# --- Endpoints ---
@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/items")
def get_items():
    return [
        {"id": 1, "name": "LangGraph Workflow Kit", "category": "AI Tools", "price": 49.99},
        {"id": 2, "name": "FastAPI Starter Pack", "category": "Backend", "price": 29.99},
        {"id": 3, "name": "React Dashboard UI", "category": "Frontend", "price": 39.99},
        {"id": 4, "name": "Docker Compose Bundle", "category": "DevOps", "price": 19.99},
        {"id": 5, "name": "RAG Pipeline Template", "category": "AI Tools", "price": 59.99},
    ]

@app.post("/analyze", response_model=AnalyzeResponse)
def analyze_text(body: AnalyzeRequest):
    text = body.text.strip()
    word_count = len(text.split())

    # Simple mock sentiment — in real projects this calls OpenAI/HuggingFace
    positive_words = {"good", "great", "excellent", "amazing", "love", "best"}
    negative_words = {"bad", "terrible", "awful", "hate", "worst", "poor"}

    words = set(text.lower().split())
    pos_hits = len(words & positive_words)
    neg_hits = len(words & negative_words)

    if pos_hits > neg_hits:
        sentiment = "positive"
        score = round(0.5 + (pos_hits * 0.1), 2)
    elif neg_hits > pos_hits:
        sentiment = "negative"
        score = round(0.5 - (neg_hits * 0.1), 2)
    else:
        sentiment = "neutral"
        score = round(random.uniform(0.45, 0.55), 2)

    return AnalyzeResponse(sentiment=sentiment, score=min(max(score, 0.0), 1.0), word_count=word_count)