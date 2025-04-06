import React, { useContext } from 'react'
import { Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import Buycredit from './pages/Buycredit'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Login from './components/Login'
import { Appcontext } from './context/appcontext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
const {showLogin} = useContext(Appcontext)

  return (
    
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <ToastContainer position='bottom-right'/>
      <Navbar/>
      {showLogin && <Login/>}
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/buy' element={<Buycredit/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
