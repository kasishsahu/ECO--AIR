from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.init_db import *
from app.routes.aqi import router as aqi_router
from app.routes import prediction

app = FastAPI(
    title="Eco-Air Backend",
    description="AI Powered Urban Air Quality Platform",
    version="1.0"
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
        "http://localhost:5175",
        "http://127.0.0.1:5175",
        "http://localhost:5176",
        "http://127.0.0.1:5176",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(aqi_router)
app.include_router(prediction.router)

@app.get("/")
def home():
    return {
        "message": "Eco-Air Backend Running Successfully"
    }