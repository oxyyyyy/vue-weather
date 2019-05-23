import axios from "axios";

const API_KEY = "b60f3577e8eb46f089853e2a9fd7d744";

const apiClient = axios.create({
  baseURL: `https://api.weatherbit.io/v2.0/current?city=Kiev,UA&key=${API_KEY}`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getWeather() {
    return apiClient.get();
  }
};
