import joblib
import pandas as pd

model = joblib.load("app/ai/models/aqi_model.pkl")

def predict_aqi(data):
    df = pd.DataFrame([{
        "PM2.5": data.PM2_5,
        "PM10": data.PM10,
        "NO": data.NO,
        "NO2": data.NO2,
        "NOx": data.NOx,
        "NH3": data.NH3,
        "CO": data.CO,
        "SO2": data.SO2,
        "O3": data.O3
    }])

    prediction = model.predict(df)

    return float(prediction[0])