import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Landing from './components/Landing/Landing.tsx';
import Home from './components/Home/Home.tsx';

const router = createBrowserRouter([{
  path: '/',
  element: <Landing />
}, 
{
  path: '/Home',
  element: <Home />
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
