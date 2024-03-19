import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Landing } from './components/Landing/Landing.tsx';
import { Home } from './components/Home/Home.tsx';
import { Monster } from './components/Monsters/Monster.tsx';

const router = createBrowserRouter([{
  path: '/',
  element: <Landing />
}, 
{
  path: '/Home',
  element: <Home />
},
{
  path: '/Monster',
  element: <Monster />
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
