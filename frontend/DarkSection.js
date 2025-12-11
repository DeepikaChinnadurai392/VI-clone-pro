export default function DarkSection() {
  return (
    <section style={{
      width: '100%',
      backgroundColor: '#0D1B2A',
      color: 'white',
      padding: '250px 75px',
      boxSizing: 'border-box',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        bottom: '-165px',
        left: '-165px',
        width: '400px',
        height: '450px',
        backgroundColor: '#00ccff',
        borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute',
        top: '-165px',
        right: '-165px',
        width: '450px',
        height: '370px',
        backgroundColor: '#FFD700',
        borderRadius: '50%',
      }} />
      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 style={{
          fontSize: 'clamp(3rem, 5vw, 4rem)',
          fontWeight: '900',
          marginBottom: '30px',
          lineHeight: '1.2',
        }}>
          The Future of Work is,<br />Changing.
        </h2>
        <p style={{
          fontSize: '1.7rem',
          lineHeight: '2',
          fontWeight: '500',
          maxWidth: '800px',
          margin: '0 auto',
          color: '#ccc',
        }}>
          As AI technology reshapes industries, work-based learning is more essential than ever.
          Real-world experience not only empowers learners but also equips employers with fresh
          talent ready to drive innovation.
        </p>
      </div>
    </section>
  );
}
