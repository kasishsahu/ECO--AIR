from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.models.aqi import AQI
from app.schemas.aqi import AQICreate

router = APIRouter()


# ---------------- GET ---------------- #

@router.get("/aqi")
def get_aqi(db: Session = Depends(get_db)):
    return db.query(AQI).all()


# ---------------- POST ---------------- #

@router.post("/aqi")
def add_aqi(aqi: AQICreate, db: Session = Depends(get_db)):

    new_record = AQI(
        ward=aqi.ward,
        aqi=aqi.aqi,
        pm25=aqi.pm25,
        pm10=aqi.pm10,
        temperature=aqi.temperature,
        humidity=aqi.humidity,
        wind=aqi.wind
    )

    db.add(new_record)
    db.commit()
    db.refresh(new_record)

    return new_record


# ---------------- PUT ---------------- #

@router.put("/aqi/{id}")
def update_aqi(id: int, updated: AQICreate, db: Session = Depends(get_db)):

    record = db.query(AQI).filter(AQI.id == id).first()

    if not record:
        return {"message": "AQI record not found"}

    record.ward = updated.ward
    record.aqi = updated.aqi
    record.pm25 = updated.pm25
    record.pm10 = updated.pm10
    record.temperature = updated.temperature
    record.humidity = updated.humidity
    record.wind = updated.wind

    db.commit()
    db.refresh(record)

    return record


# ---------------- DELETE ---------------- #

@router.delete("/aqi/{id}")
def delete_aqi(id: int, db: Session = Depends(get_db)):

    record = db.query(AQI).filter(AQI.id == id).first()

    if not record:
        return {"message": "AQI record not found"}

    db.delete(record)
    db.commit()

    return {"message": "AQI deleted successfully"}