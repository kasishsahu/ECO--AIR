from pydantic import BaseModel

class AQICreate(BaseModel):
    ward: str
    aqi: int
    pm25: float
    pm10: float
    temperature: float
    humidity: float
    wind: float