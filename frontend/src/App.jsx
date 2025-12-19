
import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contect"
import Service from "./Pages/Service"

export const App = () => {
  return (
    <>
    {/* <Header/> */}
    {/* <Footer/> */}
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About />} />
      <Route path="/contect" element={<Contect />} />
      <Route path="/Service" element={<Service />} />




    </Routes>
    </>
  )
}
export default App
