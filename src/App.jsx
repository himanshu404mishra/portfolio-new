
const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: 'linear-gradient(to right, #ff7e5f, #feb47b)', color: '#fff', fontFamily: 'Arial, sans-serif', padding: '1rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>Welcome to My New Portfolio</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem', textAlign: 'center' }}>Currently building...🏗</p>
      <a href="https://legacyhimanshu404mishra.netlify.app" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', backgroundColor: '#007bff', padding: '0.75rem 1.5rem', borderRadius: '5px', textDecoration: 'none', fontSize: '1rem', textAlign: 'center' }}>
        Visit my legacy portfolio
      </a>
    </div>
  )

}

export default App