import React from 'react'
import { Link } from 'react-router'
import "./Navbar.scss"
export default function Navbar() {
  return (
    <div className='Navbar'>
        <h1 className='Navbar__title'>PULSE</h1>
        <img className='Navbar__icon' src="https://i.imgur.com/IlhF1bf.png" alt="Pulse-Icon" />
        <h3 className='Navbar__login'>
          <Link className='Navbar__loginDirect' to='/login'>LOGIN</Link>
        </h3>
    </div>
  )
}
