from app.database.database import Base, engine
from app.models.aqi import AQI

Base.metadata.create_all(bind=engine)