import axios from "axios";
import { CURRENT_WEATHER } from "@/constants";

const apiClient = axios.create({
  baseURL: CURRENT_WEATHER,
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
