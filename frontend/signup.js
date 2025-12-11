// pages/signup.js
import { useState } from "react";
import { signup } from "../utils/api";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signup(form);
      setMessage(result);
      setError("");
    } catch (err) {
      setError(err.message || "Signup failed");
      setMessage("");
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <div style={{ flex: 1, padding: "60px", backgroundColor: "#fff", position: "relative" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "30px" }}>
          Create your account
        </h1>
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              fontSize: "1rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Work Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              fontSize: "1rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password (min 6 characters)"
            value={form.password}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              fontSize: "1rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "1rem",
              fontWeight: "bold",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </form>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        {message && <p style={{ color: "green", marginTop: "10px" }}>{message}</p>}
      </div>
    </div>
  );
}
