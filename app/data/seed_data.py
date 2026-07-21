from app.database.database import SessionLocal
from app.models.aqi import AQI

db = SessionLocal()

sample_data = [
    AQI(
        ward="Ward 1",
        aqi=180,
        pm25=95,
        pm10=120,
        temperature=31,
        humidity=70,
        wind=12
    ),
    AQI(
        ward="Ward 2",
        aqi=210,
        pm25=110,
        pm10=145,
        temperature=33,
        humidity=66,
        wind=10
    ),
    AQI(
        ward="Ward 3",
        aqi=275,
        pm25=150,
        pm10=190,
        temperature=34,
        humidity=61,
        wind=8
    )
]

db.add_all(sample_data)
db.commit()
db.close()

print("Sample AQI data inserted successfully!")