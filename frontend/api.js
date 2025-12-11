// utils/api.js
export const BASE_URL = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8081";

export const login = async (credentials) => {
  try {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(errText || "Login failed");
    }

    return await response.text();
  } catch (error) {
    console.error("login error:", error);
    throw error;
  }
};
