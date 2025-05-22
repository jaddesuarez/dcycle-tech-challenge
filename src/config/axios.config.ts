import axios from "axios";
export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchApi = axios.create({
  baseURL: BASE_URL || "http://localhost:3200/api",
  headers: {
    "Content-Type": "application/json",
  },
});
