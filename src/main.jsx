import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@smastrom/react-rating/style.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home/Home.jsx';
import ChefDetail from './ChefDetails/ChefDetail.jsx';
import Foods from './Food/Foods.jsx';
import Login from './Auth/Login.jsx'
import Register from './Auth/Register.jsx'
import PriveteRoute from './PrivetRout/PriveteRoute.jsx'
import ContexRoute from './PrivetRout/ContexRoute.jsx'
import Blog from './Blog/Blog.jsx'

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
        element: <ContexRoute><ChefDetail></ChefDetail></ContexRoute>,
        loader: ({params})=> fetch(`https://chef-server-sagor369.vercel.app/chef/${params.id}`)
      
      },
      {
        path: 'recipe/:id',
        element: <ContexRoute><Foods></Foods></ContexRoute>,
        loader: ({params}) => fetch(`https://chef-server-sagor369.vercel.app/recipe/${params.id}`)

      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]

  },
  {
    path: 'login',
    element: <Login></Login>

  },
  {
    path: 'register',
    element: <Register></Register>
  }

  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <PriveteRoute>
    <RouterProvider router={router}/>
  </PriveteRoute>
    )
