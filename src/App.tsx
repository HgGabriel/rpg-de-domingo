import './index.css'
import Landing from './components/Landing/Landing.tsx'
import Home from './components/Home/Home.tsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/' element={<Landing />}/>
    </Routes>
    </>
  );
}

export default App;
