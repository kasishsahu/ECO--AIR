from sqlalchemy import Column, Integer, Float, String
from app.database.database import Base


class AQI(Base):
    __tablename__ = "aqi"

    id = Column(Integer, primary_key=True, index=True)
    ward = Column(String)
    aqi = Column(Integer)
    pm25 = Column(Float)
    pm10 = Column(Float)
    temperature = Column(Float)
    humidity = Column(Float)
    wind = Column(Float)