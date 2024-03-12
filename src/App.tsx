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
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
