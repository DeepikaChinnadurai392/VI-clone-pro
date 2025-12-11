"use client";
import { useState } from "react"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Internship() {
  const router = useRouter();

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
          padding: "50px 70px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
      
        <div style={{ marginBottom: "20px" }}>
          <Image
            src="/mainlogo.png"
            alt="Logo"
            width={250}
            height={200}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>

        
        <div style={{ marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: "700",
              margin: "10px 0",
              color: "#1a1a1a",
            }}
          >
            Start your internship journey
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              color: "#333",
              marginBottom: "10px",
            }}
          >
            Gain experience to become career-ready
          </p>
          <p
            style={{
              fontSize: "1.6rem",
              fontWeight: "500",
              marginBottom: "20px",
            }}
          >
            How are you applying?
          </p>
        </div>

       
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            width: "100%",
          }}
        >
         
          <div
            style={{
              backgroundColor: "#f7f9fb",
              borderRadius: "16px",
              padding: "30px 25px",
              border: "1px solid #ddd",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <Link href="/university-login" passHref>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Image
                  src="/cap.png"
                  alt="University"
                  width={100}
                  height={90}
                  style={{ marginRight: "20px" }}
                />
                <div>
                  <h2 style={{ fontSize: "1.8rem", marginBottom: "8px" }}>
                    <b>University Partner</b>
                  </h2>
                  <p style={{ fontSize: "1.3rem", color: "#555" }}>
                    Select this if you are applying through your university’s
                    partnership with Virtual Internships.
                  </p>
                </div>
              </div>
            </Link>

            <div
              style={{
                display: "flex",
                gap: "15px",
                marginTop: "20px",
              }}
            >
              <Link href="/special-program" passHref>
                <button
                  style={{
                    padding: "10px 20px",
                    fontSize: "1.3rem",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#e4ecf3",
                    color: "#222",
                    cursor: "pointer",
                  }}
                >
                  🎓 Special Program
                </button>
              </Link>

              <Link href="/support" passHref>
                <button
                  style={{
                    padding: "10px 20px",
                    fontSize: "1.3rem",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#e4ecf3",
                    color: "#222",
                    cursor: "pointer",
                  }}
                >
                  💬 Support
                </button>
              </Link>
            </div>
          </div>

         
          <div
            style={{
              backgroundColor: "#f7f9fb",
              borderRadius: "16px",
              padding: "30px 25px",
              border: "1px solid #ddd",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
          >
            <Link href="/general-login" passHref>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Image
                  src="/user.png"
                  alt="User"
                  width={90}
                  height={90}
                  style={{ marginRight: "20px" }}
                />
                <div>
                  <h2 style={{ fontSize: "1.8rem", marginBottom: "8px" }}>
                    <b>General Login</b>
                  </h2>
                  <p style={{ fontSize: "1.3rem", color: "#555" }}>
                    Select this if you are a student applying independently.
                  </p>
                </div>
              </div>
            </Link>

            <div
              style={{
                display: "flex",
                gap: "15px",
                marginTop: "20px",
              }}
            >
              <Link href="/flexible-start" passHref>
                <button
                  style={{
                    padding: "10px 20px",
                    fontSize: "1.3rem",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#e4ecf3",
                    color: "#222",
                    cursor: "pointer",
                  }}
                >
                  🗓 Flexible Start Date
                </button>
              </Link>

              <Link href="/global-opportunities" passHref>
                <button
                  style={{
                    padding: "10px 20px",
                    fontSize: "1.3rem",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#e4ecf3",
                    color: "#222",
                    cursor: "pointer",
                  }}
                >
                  🌎 Global Opportunities
                </button>
              </Link>
            </div>
          </div>
        </div>

       
<div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "40px" }}>
  <button
    onClick={() => router.push("/selection")} // ← Directly navigate to selection page
    style={{
      backgroundColor: "#2894d3",
      color: "white",
      padding: "12px 40px",
      fontSize: "1.3rem",
      borderRadius: "12px",
      border: "none",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    ← Back
  </button>
</div>
      </div>

     
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#eef3f9",
          padding: "50px",
        }}
      >
        <Image
          src="/internship.png"
          alt="Internship"
          width={1100}
          height={900}
          style={{ borderRadius: "12px", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}