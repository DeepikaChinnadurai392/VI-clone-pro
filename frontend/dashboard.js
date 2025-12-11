export default function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?fit=crop&w=1200&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '200px',
        borderRadius: '10px',
        marginBottom: '20px'
      }}></div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Dashboard</h1>
      <p style={{ textAlign: 'center' }}>Welcome to your internship dashboard. Track progress, applications, and more.</p>
    </div>
  );
}
