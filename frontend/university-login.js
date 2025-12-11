"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function UniversityLogin() {
  const [batchCode, setBatchCode] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleContinue = async () => {
  try {
    if (!batchCode || !courseDuration) {
      alert("Please enter both Batch Code and Duration");
      return;
    }
    const response = await fetch("http://localhost:8081/api/university/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ batchCode, courseDuration }),
    });

    if (response.ok) {
      const message = await response.text();
      alert(message);
    } else {
      alert("Something went wrong, please try again ❌");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Server not responding, please check backend!");
  }
};

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Poppins, Arial, sans-serif",
        backgroundColor: "#f9fafc",
      }}
    >
      
      <div
        style={{
          flex: 1,
          padding: "60px 70px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
       
          <div style={{ marginBottom: "10px" }}>
            <Image
              src="/mainlogo.png"
              alt="Logo"
              width={220}
              height={160}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "25px",
              color: "#1a1a1a",
            }}
          >
            Your internship journey starts here
          </h1>

         
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                display: "block",
                marginBottom: "10px",
              }}
            >
              Enter batch code
            </label>
            <input
              type="text"
              placeholder="E.g. ABCDE12345"
              value={batchCode}
              onChange={(e) => setBatchCode(e.target.value.toUpperCase())}
              style={{
                width: "100%",
                padding: "15px",
                fontSize: "1.4rem",
                borderRadius: "10px",
                border: "1px solid #ccc",
                textTransform: "uppercase",
              }}
            />
          </div>

         
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                display: "block",
                marginBottom: "10px",
              }}
            >
              Course Duration
            </label>
            <input
              type="text"
              placeholder="E.g. 6 months"
              value={courseDuration}
              onChange={(e) => setCourseDuration(e.target.value)}
              style={{
                width: "100%",
                padding: "15px",
                fontSize: "1.4rem",
                borderRadius: "10px",
                border: "1px solid #ccc",
              }}
            />
          </div>

       
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "15px",
              padding: "25px",
              backgroundColor: "#f9f9f9",
              marginBottom: "20px",
            }}
          >
            <p style={{ fontSize: "1.4rem", marginBottom: "10px" }}>
              Enter the batch code from your university's welcome email, or use
              the login link provided.
            </p>
          </div>

          {error && <p style={{ color: "red", fontSize: "1.4rem" }}>{error}</p>}
          {success && <p style={{ color: "green", fontSize: "1.4rem" }}>{success}</p>}

          <p style={{ fontSize: "1.4rem", marginBottom: "25px" }}>
            Need help?{" "}
            <a
              href="mailto:support@virtualinternships.com"
              style={{
                color: "#0070f3",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              support@virtualinternships.com
            </a>
          </p>

          
          <button
            onClick={handleContinue}
            style={{
              padding: "14px 30px",
              fontSize: "1.5rem",
              fontWeight: "600",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "#0070f3",
              color: "white",
              cursor: "pointer",
            }}
          >
            Continue →
          </button>
        </div>

        
        <div style={{ marginTop: "40px" }}>
          <Link href="/internship" passHref>
            <button
              style={{
                backgroundColor: "#2894d3",
                color: "white",
                padding: "12px 35px",
                fontSize: "1.3rem",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ← Back
            </button>
          </Link>
        </div>
      </div>

      
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#eef3f9",
        }}
      >
        <Image
          src="/internship.png"
          alt="Internship"
          width={900}
          height={800}
          style={{ borderRadius: "10px", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}