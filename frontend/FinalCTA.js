import React from "react";

export default function FinalCTA() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexWrap: "nowrap", 
        backgroundColor: "#c7d4d8ff",
        padding: "0",       
        margin: "0",       
        boxSizing: "border-box",
      }}
    >
      
      <div
        style={{
          flex: 1,          
          textAlign: "left",
          padding: "150px",
          minWidth: 0,     
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2.8rem, 5vw, 3.5rem)",
            fontWeight: "900",
            color: "#004466",
            marginBottom: "40px",
          }}
        >
          The only platform that <br />
          <strong style={{ color: "#008B8B" }}>guarantees</strong> real-world work <br />
          experience across the globe
        </h2>
        <p
          style={{
            fontSize: "1.8rem",
            color: "#070606ff",
            marginBottom: "40px",
          }}
        >
          Shaping tomorrow’s workforce: one internship at a time
        </p>
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "12px 25px",
              fontSize: "1.8rem",
              fontWeight: "700",
              backgroundColor: "#dd8d16ff",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Company: Hire
          </button>
          <button
            style={{
              padding: "12px 25px",
              fontSize: "1.8rem",
              fontWeight: "700",
              backgroundColor: "#dfdad6ff",
              color: "#1f1b1bff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Educators: Partner
          </button>
          <button
            style={{
              padding: "12px 25px",
              fontSize: "1.8rem",
              fontWeight: "700",
              backgroundColor: "#2b9486ff",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Interns: Apply
          </button>
        </div>
      </div>

     
      <div
        style={{
          flex: 1,             
          position: "relative",
          overflow: "visible",
          minWidth: 0,
        }}
      >
        
        <div
          style={{
            position: "absolute",
            bottom: "200px",
            left: "-110px",
            width: "700px",
            height: "700px",
            background: "radial-gradient(circle at center, #008B8B 0%, #00CED1 100%)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 1200"
          preserveAspectRatio="xMidYMid slice"
          style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
        >
          <path
            d="M800 0 
               C520 140 580 150 480 420 
               C420 600 580 700 340 900 
               C200 1020 150 1080 0 1100
               L900 1100
               L1000  Z"
            fill="#044b41ff"
          />
        </svg>
      
<div
  style={{
    position: "absolute",
    bottom: "0",
    right: "0",
    width: "100%",
    height: "100%",
    zIndex: 0,
  }}
>
 
  <div
    style={{
      position: "absolute",
      bottom: "50px",
      right: "-200px",
      width: "400px",
      height: "400px",
      border: "8px solid orange", 
      borderRadius: "50%",
    }}
  />

 
  <div
    style={{
      position: "absolute",
      bottom: "500px",
      right: "160px",
      width: "400px",
      height: "400px",
      border: "8px solid orange",
      borderRadius: "50%",
    }}
  />

  
  <div
    style={{
      position: "absolute",
      bottom: "800px",
      right: "-75px",
      width: "110px",
      height: "110px",
      border: "5px solid orange",
      borderRadius: "50%",
    }}
  />
</div>


      
        <div
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            width: "88%",
            height: "97%",
            zIndex: 1,
          }}
        >
          <img
            src="/image.png"
            alt="Girl studying"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </section>
  );
}