import { useState } from 'react'
import dndlogo from './assets/D&D-logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://dnd.wizards.com/" target="_blank">
          <img src={dndlogo} className="logo" alt="D&D logo" />
        </a>
      </div>
      <h1>Dungeons & Dragons</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> 
      </div>
      <p className="read-the-docs">
        Click on the D&D logo for help
      </p>
    </>
  )
}

export default App
