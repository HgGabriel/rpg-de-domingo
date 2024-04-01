import ReactDOM from 'react-dom/client'
import './styles/global.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Landing } from './components/Landing/Landing.tsx';
import { Home } from './components/Home/Home.tsx';
import { Monsters } from './components/Monsters/Monsters.tsx';

const router = createBrowserRouter([{
  path: '/',
  element: <Landing />
}, 
{
  path: '/Home',
  element: <Home />
},
{
  path: '/Monsters',
  element: <Monsters />
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
