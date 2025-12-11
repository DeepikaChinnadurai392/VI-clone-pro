"use client";
import BackButton from "../components/BackButton";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Login.module.css";
import { signIn } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  
  const validCompanies = ["google", "infosys", "tcs", "cts", "accenture", "cognizant"];

  const BACKEND_URL = "http://127.0.0.1:8081/api/users/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const input = email.toLowerCase().trim();

   
    const emailRegex = /^([a-z]+)@([a-z]+)\.com$/;
    const match = input.match(emailRegex);

    if (!match) {
      setError("❌ Invalid format. Example: deepika@google.com");
      return;
    }

    const prefix = match[1];
    const company = match[2];

    
    if (!/^[a-z]+$/.test(prefix)) {
      setError("❌ Invalid name format. Use only lowercase letters before @");
      return;
    }

    
    if (!validCompanies.includes(company)) {
      setError("❌ Only official company emails are allowed (google, tcs, infosys, cts, accenture)");
      return;
    }

    // Send request to backend
    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: input }),
      });

      if (!response.ok) {
        const msg = await response.text();
        throw new Error(msg || "Failed to connect to backend");
      }

      const message = await response.text();
      setSuccess(`✅ ${message}`);
    } catch (err) {
      console.error(err);
      setError("🚫 Error connecting to backend. Please check if it's running on port 8081.");
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>

      <div style={{ flex: 1, padding: "110px", backgroundColor: "#fff", position: "relative" }}>
        <Image
          src="/image copy 4.png"
          alt="Logo"
          width={250}
          height={130}
          style={{ position: "absolute", top: 20, left: 20 }}
        />

        <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", marginBottom: "20px" }}>
          Access the company platform
        </h1>
        <p style={{ fontSize: "1.7rem", marginBottom: "25px" }}>
          Use your work email address to continue. Need an account? We’ll help you create one.
          
        </p>

        <form onSubmit={handleSubmit} style={{ maxWidth: "900px" }}>
          <input
            type="text"
            placeholder="example@yourcompany.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              fontSize: "1.5rem",
              borderRadius: "20px",
              border: "1px solid #524545ff",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "1.5rem",
              fontWeight: "bold",
              backgroundColor: "#1a1c1fff",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Continue with Email
          </button>
        </form>

        
        {error && <p style={{ color: "red", marginTop: "10px", fontSize: "1.3rem" }}>{error}</p>}
        {success && <p style={{ color: "green", marginTop: "10px", fontSize: "1.3rem" }}>{success}</p>}

       
        <div style={{ display: "flex", alignItems: "center", margin: "25px 0", width: "100%" }}>
          <hr style={{ flex: 1, border: "1px solid #ccc" }} />
          <span style={{ margin: "0 10px", color: "#666" }}>or</span>
          <hr style={{ flex: 1, border: "1px solid #ccc" }} />
        </div>

       
        <button
          onClick={() => signIn("google")}
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            backgroundColor: "#4285F4",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Continue with Google
        </button>

       
        <p
          style={{
            fontSize: "1.5rem",
            color: "#4e4e4eff",
            marginTop: "12px",
            lineHeight: "1.6",
            padding:"7px",
            textAlign: "center",
          }}
        >
          By continuing you are agreeing to{" "}
          <strong>Virtual Internships</strong>'s{" "}
          <a href="https://www.virtualinternships.com/policies/terms-and-conditions/?_gl=1*1lrj1m4*_gcl_au*ODQ4MzY2MzMuMTc1ODg2NTcwOS4xMjAzNTA2Mjc5LjE3NjA2MzE5NjYuMTc2MDYzMjQ1Nw..*_ga*MTYxMjIxNTU3NC4xNzU4ODY1NzEx*_ga_SFQLTTJMF5*czE3NjA2OTEwOTckbzE3JGcxJHQxNzYwNjkxMTEzJGo0NCRsMCRoMA.." style={{ color: "#4285F4", textDecoration: "underline" }}>
            Terms of Use
          </a>{" "}
          &{" "}
          <a href="https://www.virtualinternships.com/policies/privacy?_gl=1*gv3ud7*_gcl_au*ODQ4MzY2MzMuMTc1ODg2NTcwOS4xMjAzNTA2Mjc5LjE3NjA2MzE5NjYuMTc2MDYzMjQ1Nw..*_ga*MTYxMjIxNTU3NC4xNzU4ODY1NzEx*_ga_SFQLTTJMF5*czE3NjA2OTEwOTckbzE3JGcxJHQxNzYwNjkxMTM2JGoyMSRsMCRoMA.." style={{ color: "#4285F4", textDecoration: "underline" }}>
            Privacy Policy
          </a>
          
        </p>
      
      <BackButton />
      
      </div>

     
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px",
          textAlign: "center",
          backgroundColor: "#f9fafc",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "15px" }}>
          Tap into a global pool of remote interns
        </h2>
        <p style={{ fontSize: "1.4rem", marginBottom: "25px", color: "#444" }}>
          Find and connect with interns that fit your business needs.
        </p>
        

        <Image
          src="/companyimg.png"
          alt="Host Company"
          width={650}
          height={500}
          style={{ borderRadius: "12px" }}
        />
      </div>
    </div>
  );
}
