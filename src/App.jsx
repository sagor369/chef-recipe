import { useState } from 'react'
import Header from './Home/Home/Header'
import { Outlet } from 'react-router-dom'
import bgLogo from './assets/bg_logo.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-7xl mx-auto border'>
      <div className='bg-gray-400 bg-cover text-white bg-blend-multiply' style={{backgroundImage: `url(${bgLogo})` , }}>
     <Header></Header>

      </div>
     <Outlet></Outlet>
    </div>
  )
}

export default App
