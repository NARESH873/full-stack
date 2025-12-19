import React from 'react'
import'./Navbar.css'
export const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className='Navbar'> 
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/about">About</Link></li>
            <li> <Link to="/contect">Contect</Link></li>
            <li> <Link to="/service">Service</Link></li>
            
            </ul>
        </nav>
    </div>
  )
}
