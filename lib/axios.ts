import axios from "axios";
import { API_CONFIG } from "@/constants";

export const axiosClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT_MS,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;