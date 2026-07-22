import api from "./api";

export const getAQIData = async () => {
    const response = await api.get("/aqi");
    return response.data;
};