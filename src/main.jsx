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
import ChefDetail from './ChefDetails/ChefDetail.jsx';

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
        path: 'chef/:id',
        element: <ChefDetail></ChefDetail>,
        loader: ({params})=> fetch(`https://chef-server-sagor369.vercel.app/chef/${params.id}`)
      
      }
    ]

  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>)
