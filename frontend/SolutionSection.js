export default function SolutionSection() {
  return (
    <section style={{
      width: '100%',
      position: 'relative',   
      backgroundColor: '#fff',
      textAlign: 'center',
      padding: '100px 20px',
      boxSizing: 'border-box',
      overflow: 'hidden',    
    }}>
      
     
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0, 
      }}>
        
        <div style={{
          position: 'absolute',
          top: '-150px',
          right: '-150px',
          width: '400px',
          height: '400px',
          border: '8px solid orange',
          borderRadius: '50%',
        }} />

     
        <div style={{
          position: 'absolute',
          top: '200px',
          left: '-150px',
          width: '450px',
          height: '450px',
          border: '8px solid orange',
          borderRadius: '50%',
        }} />
         
        <div style={{
          position: 'absolute',
          bottom: '600px',
          right: '230px',
          width: '270px',
          height: '270px',
          border: '5px solid orange',
          borderRadius: '50%',
        }} />

     
        <div style={{
          position: 'absolute',
          bottom: '400px',
          left: '310px',
          width: '270px',
          height: '270px',
          border: '5px solid orange',
          borderRadius: '50%',
        }} />
      </div>

    
      <h2 style={{
        fontSize: 'clamp(2.9rem, 5vw, 3.9rem)',
        fontWeight: '900',
        marginBottom: '20px',
        color: '#000',
        position: 'relative',  
        zIndex: 1,
      }}>
        The Solution: <span style={{ color: '#00ccff' }}>Virtual <br />Internships</span>
      </h2>
      <p style={{
        fontSize: '1.8rem',
        lineHeight: '1.8',
        fontWeight: '600',
        maxWidth: '800px',
        margin: '0 auto 60px auto',
        color: '#555',
        position: 'relative',
        zIndex: 1,
      }}>
        Connecting educators, companies, and interns to create lasting, meaningful impact.
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        flexWrap: 'wrap',
        padding: '0 20px',
        position: 'relative',
        zIndex: 1,
      }}>
        {["Companies", "Educators", "Interns","Employees"].map((heading, index) => (
          <div key={index} style={{
            backgroundColor: '#ffffff',
            padding: '30px',
            width: '450px',
            height: '350px',
            borderRadius: '20px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
          }}>
            <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'blue' }}>{heading}</h3>
            <p style={{ fontSize: '1.7rem', color: '#0a1118ff', lineHeight: '1.7' }}>
              {heading === "Companies" ? "Access remote, pre-vetted interns to drive growth and strengthen your future talent pipeline."
              : heading === "Educators" ? "Seamlessly embed internships into your curriculum, enhancing student employability and practical skills."
              : heading === "Interns" ? "Launch your career with global experience, valuable skills, and professional connections for future careers."
              :"Students share their personal journeys, challenges, and growth during the internships. They talk about real experiences"
            }
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}