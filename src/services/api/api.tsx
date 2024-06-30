import { API_URL } from "@/constants/config";
import axios from "axios";

/**
 * api instance
 * Use it on both, server and client.
 */
export const api = axios.create({
  baseURL: `${API_URL}/v2`,
  headers: {
    "Content-Type": "application/json",
  },
});
