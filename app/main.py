from fastapi import FastAPI
from app.database.init_db import *
from app.routes.aqi import router as aqi_router
from app.routes import prediction
app = FastAPI(
    title="Eco-Air Backend",
    description="AI Powered Urban Air Quality Platform",
    version="1.0"
)
app.include_router(aqi_router)
app.include_router(prediction.router)
@app.get("/")

def home():
    return {
        "message": "Eco-Air Backend Running Successfully"
    }
