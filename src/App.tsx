import './index.css'
import Landing from './components/Landing/Landing.tsx'
import Home from './components/Home/Home.tsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
<<<<<<< HEAD
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
=======
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/' element={<Landing />}/>
    </Routes>
>>>>>>> 95b1c60c49ae6af12f73380af839287252474662
    </>
  );
}

export default App;
