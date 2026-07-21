from fastapi import APIRouter
from app.schemas.prediction import PredictionRequest
from app.ai.predict import predict_aqi
from app.services.gemini_service import get_health_advice

router = APIRouter()

@router.post("/predict")
def predict(request: PredictionRequest):
    print("Step 1: Request received")

    predicted_aqi = predict_aqi(request)
    print("Step 2: Prediction =", predicted_aqi)

    advice = get_health_advice(predicted_aqi)
    print("Step 3: Gemini response received")

    return {
        "predicted_aqi": round(predicted_aqi, 2),
        "health_advice": advice
    }