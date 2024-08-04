import { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <div className="App">
      <h1>My Express-Vite-React App</h1>
      <p>{message}</p>
    </div>
  )
}

export default App
