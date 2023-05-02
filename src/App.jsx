import { useState } from 'react'
import Header from './Home/Home/Header'
import { Outlet } from 'react-router-dom'
import bgLogo from './assets/bg_logo.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className=' max-w-7xl mx-auto borderbg-gray-600 bg-cover bg-fixed bg-opacity-50  bg-blend-multiply ' style={{backgroundImage: `url(${bgLogo})` , }}>
     <Header></Header>      
     <Outlet></Outlet>
    </div>
  )
}

export default App
