import { FaGraduationCap, FaHandsHelping, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from "next/link";


export default function Hero() {
  const buttonStyle = {
    padding: '22px 60px', 
    fontSize: '1.35rem', 
    fontWeight: '700',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    gap: '10px',
    minWidth: '220px', 
    height: '60px'      
  };

  return (
    <section style={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', height: '100vh', width: '100%' }}>

        
        <div style={{
          width: '65%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '0 80px', 
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{ textAlign: 'left', width: '100%', color: '#333', marginTop: '-50px' }}>
            
            
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '900',
              marginBottom: '30px',
              lineHeight: '1.2',
              fontFamily: '"Poppins", sans-serif'
            }}>
              The only platform that <br />
              <strong style={{ color: '#008B8B' }}>guarantees</strong> real-world work <br />
              experience across the globe
            </h1>

            
            <p style={{ fontSize: '1.75rem', fontWeight: '500', marginBottom: '40px', color: '#666' }}>
              Shaping tomorrow’s workforce: one internship at a time
            </p>

           
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Link href="https://www.virtualinternships.com/companies/" style={{ ...buttonStyle, backgroundColor: '#FF8C00', color: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FaGraduationCap /> Company: Hire
                </Link>

                <Link href="https://www.virtualinternships.com/universities/" style={{ ...buttonStyle, backgroundColor: 'white', color: '#333', border: '2px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FaHandsHelping /> Educators: Partner
                </Link>
              </div>
                <Link href="https://www.virtualinternships.com/interns/" style={{ ...buttonStyle, backgroundColor: '#008B8B', color: 'white', border: 'none', alignSelf: 'flex-start', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FaCalendarAlt /> Interns: Apply
                </Link>
            </div>

          </div>
        </div>


        
        <div style={{ width: '35%', height: '100vh', position: 'relative', overflow: 'visible' }}>
          
        
          <div style={{
            position: 'absolute',
            bottom: '200px',
            left: '-110px',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle at center, #008B8B 0%, #00CED1 100%)',
            borderRadius: '50%',
            zIndex: 0,
          }} />

          
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
              fill="#062b2eff"
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
      bottom: "490px",
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



         
          <div style={{ position: 'absolute', bottom: '0', right: '0', width: '88%', height: '97%', zIndex: 1 }}>
            <Image
              src="/image.png"
              alt="Girl studying"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}