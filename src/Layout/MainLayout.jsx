import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Navbar/>
        <main className='flex-grow'>
          <div className="">
             <Outlet/>
          </div>
           
        </main>
        <Footer/>
    </div>
  )
}

export default MainLayout
