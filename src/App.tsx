import './index.css'
import  {Landing } from './components/Landing/Landing.tsx'
import { Home } from './components/Home/Home.tsx';
import { Routes, Route } from 'react-router-dom';

export const App: React.FC = () =>  {
  return (
    
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/' element={<Landing />}/>
    </Routes>
    
  );
}
