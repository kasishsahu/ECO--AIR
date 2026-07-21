from pydantic import BaseModel

class PredictionRequest(BaseModel):
    PM2_5: float
    PM10: float
    NO: float
    NO2: float
    NOx: float
    NH3: float
    CO: float
    SO2: float
    O3: float