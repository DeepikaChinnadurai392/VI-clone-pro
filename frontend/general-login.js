"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function GeneralLogin() {
  const [email, setEmail] = useState("");

  //  Send email to backend
  const handleEmailLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8081/api/general-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Server error. Please try again.");
      }

      const data = await response.json();

      // Show  popup msg
      alert(data.message);
    } catch (error) {
      alert("Error: Unable to connect to backend.");
      console.error("Login error:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      
      <div style={{ flex: 1, padding: "80px" }}>
        <Image src="/mainlogo.png" alt="Logo" width={300} height={250} />

        <h1
          style={{
            fontSize: "2.7rem",
            fontWeight: "bold",
            margin: "20px 0",
          }}
        >
          Get experience that employers actually notice
        </h1>

       
        <form onSubmit={handleEmailLogin} style={{ marginBottom: "20px" }}>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "15px",
              fontSize: "1.5rem",
              borderRadius: "10px",
              border: "1px solid #ccc",
              marginBottom: "15px",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              fontSize: "1.6rem",
              fontWeight: "600",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "#0070f3",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Continue with Email
          </button>
        </form>

       
        <p
          style={{
            fontSize: "1.5rem",
            margin: "20px 0",
            textAlign: "center",
            fontWeight: "500",
            color: "#555",
          }}
        >
          — Or —
        </p>

     
        <button
          onClick={() => signIn("google")}
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "1.6rem",
            fontWeight: "600",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#4285F4",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/Google.png"
            alt="Google"
            width={30}
            height={30}
            style={{ marginRight: "10px" }}
          />
          Continue with Google
        </button>

     
        <p style={{ fontSize: "1.4rem", marginTop: "20px" }}>
          By continuing you are agreeing to Virtual Internships’s{" "}
          <a href="https://web.virtualinternships.com/intern/terms-and-conditions" style={{ color: "blue" }}>
            Terms of Use
          </a>{" "}
          &{" "}
          <a href="https://www.virtualinternships.com/policies/privacy?_gl=1*664ehf*_gcl_au*ODQ4MzY2MzMuMTc1ODg2NTcwOS4xNzY4MTI0MTc5LjE3NjE4MTM4NTguMTc2MTgxMzg1OA..*_ga*MTYxMjIxNTU3NC4xNzU4ODY1NzEx*_ga_SFQLTTJMF5*czE3NjE4MTM4MTUkbzIxJGcxJHQxNzYxODE0Njk2JGozOCRsMCRoMA.." style={{ color: "blue" }}>
            Privacy Policy
          </a>{" "}
          and confirming that you’re above 18 years of age.
        </p>

       
        <div style={{ marginTop: "40px", textAlign: "left" }}>
          <Link href="/internship" passHref>
            <button
              style={{
                padding: "12px 28px",
                fontSize: "1.5rem",
                borderRadius: "10px",
                backgroundColor: "#0070f3",
                border: "1px solid #74c9ebff",
                color: "#eff1f3ff",
                cursor: "pointer",
                transition: "0.3s",
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
        }}
      >
        <Image
          src="/internship.png"
          alt="Internship"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}