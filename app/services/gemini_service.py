def get_health_advice(aqi):
    if aqi <= 50:
        return {
            "category": "Good",
            "advice": "Air quality is satisfactory. Enjoy outdoor activities."
        }
    elif aqi <= 100:
        return {
            "category": "Moderate",
            "advice": "Sensitive people should reduce prolonged outdoor exposure."
        }
    elif aqi <= 200:
        return {
            "category": "Poor",
            "advice": "Wear a mask and avoid strenuous outdoor activities."
        }
    elif aqi <= 300:
        return {
            "category": "Very Poor",
            "advice": "Stay indoors as much as possible."
        }
    else:
        return {
            "category": "Severe",
            "advice": "Avoid going outside. Use an air purifier if available."
        }