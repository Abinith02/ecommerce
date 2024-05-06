import React from 'react'
import './navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'

const navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className='nav-logo' />
        <img src={navProfile} className='navprofile' alt="" />
    </div>
  )
}

export default navbar
