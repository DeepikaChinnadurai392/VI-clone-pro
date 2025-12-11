export default function AddInternship() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: "url('https://images.unsplash.com/photo-1581091870628-7e1e8a7a8d07?fit=crop&w=1200&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <form style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '30px',
        borderRadius: '10px',
        width: '300px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add Internship</h2>
        <input type="text" placeholder="Title" style={{ width: '100%', padding: '10px', marginBottom: '15px' }} />
        <input type="text" placeholder="Company" style={{ width: '100%', padding: '10px', marginBottom: '15px' }} />
        <input type="text" placeholder="Location" style={{ width: '100%', padding: '10px', marginBottom: '15px' }} />
        <textarea placeholder="Description" style={{ width: '100%', padding: '10px', marginBottom: '15px' }} />
        <button type="submit" style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>Submit</button>
      </form>
    </div>
  );
}
