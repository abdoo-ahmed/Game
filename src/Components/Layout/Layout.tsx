import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'

const Layout = () => {
  return <>
    
    <div className="bg-[#272B30] w-full min-h-screen">
      <div className="relative flex justify-center items-center">
        <img className='w-full h-[210px]' src="../../../src/assets/Images/wraper.png" alt="wraper" />
        <Navbar />
      </div>

      <Outlet />
    </div>
  
  </>
}

export default Layout