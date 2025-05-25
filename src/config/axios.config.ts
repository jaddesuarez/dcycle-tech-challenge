import axios from "axios";
import { BASE_URL } from "@/consts/env.consts";

export const fetchApi = axios.create({
  baseURL: BASE_URL || "http://localhost:3200/api",
  headers: {
    "Content-Type": "application/json",
  },
});
