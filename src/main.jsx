import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Banner from './Home/Home/Banner.jsx';
import Home from './Home/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/' ,
    element: <App></App>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://chef-server-sagor369.vercel.app/chef')
      },
      {
        
      }
    ]

  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>)
