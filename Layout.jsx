import React from 'react'
import Header from './components/Header/Header'

// import Home from './components/Home/Home'
// import About from './components/About/About'
// import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
