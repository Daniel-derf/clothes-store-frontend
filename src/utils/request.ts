// import { useAuth } from "../contexts/AuthContext";

const BACKEND_URL = import.meta.env.REACT_APP_BACKEND_URL || "http://localhost:3000";

export async function request(endpoint: string, options: RequestInit = {}) {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${BACKEND_URL}${endpoint}`, {
    ...options,
    headers,
  });

  return response;
}
