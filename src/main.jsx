import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Banner from './Home/Home/Banner.jsx';

const router = createBrowserRouter([
  {
    path: '/' ,
    element: <App></App>,
    children:[
      {
        path: '/',
        element: <Banner></Banner>
      }
    ]

  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>)
