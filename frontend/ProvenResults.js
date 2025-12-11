export default function ProvenResults() {
  const results = [
    { number: "250k+", title: "Global Internships", description: "Available now and growing", color: "brown" },
    { number: "80+", title: "Countries", description: "Offering real world experience", color: "blue" },
    { number: "95%", title: "Intern Satisfaction", description: "Developing essential career skills", color: "red" },
    { number: "1 in 3", title: "Interns Hired", description: "Post-program completion", color: "goldenrod" },
  ];

  return (
    <section style={{
      width: '100%',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
      padding: '150px 25px',
      boxSizing: 'border-box',
      marginTop: '40px',
    }}>
      <h2 style={{
        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
        fontWeight: '900',
        marginBottom: '40px',
      }}>
        <span style={{ color: '#000' }}>Proven Results: </span>
        <span style={{ color: '#008B8B' }}>Global Impact</span>
      </h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '110px', flexWrap: 'wrap', padding: '0 20px' }}>
        {results.map((item, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '5.5rem', fontWeight: '900', color: item.color }}>{item.number}</div>
            <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#333' }}>{item.title}</div>
            <div style={{ fontSize: '1.8rem', fontWeight: '400', color: '#555' }}>{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
