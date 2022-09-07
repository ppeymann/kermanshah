import React, { useState } from 'react'
// icon import
import {BiSearch} from "react-icons/bi"
import {BsPerson} from "react-icons/bs"
import {HiOutlineMenu} from "react-icons/hi"
import {FaFacebook ,FaInstagram ,FaTwitter ,FaPinterest ,FaYoutube} from "react-icons/fa"
// css import
import "./NavbarStyle.css"

const Navbar = () => {

    const [activate , setActivate] = useState(false)
    const handleNav = ()=>setActivate(!activate)

  return (
    <div className={activate ? "navbar navbar-bg":"navbar"}>
        <div className='logo'>
            <h2>کرمانشاه</h2>
        </div>
        <ul className='nav-menu'>
            <li>خانه</li>
            <li>مقصد</li>
            <li>مسافرت</li>
            <li>رزرو</li>
            <li>تماشا</li>
        </ul>
        <div className='nav-icons'>
            <BiSearch className='icon' style={{marginLeft:"1rem"}} />
            <BsPerson className="icon" />
        </div>
        <div className='hamburger' onClick={handleNav}>
            <HiOutlineMenu className="icon" />
        </div>
        <div className={activate? "mobile-menu active":"mobile-menu"}>
            <ul className='mobile-nav'>
              <li>خانه</li>
              <li>مقصد</li>
              <li>مسافرت</li>
              <li>رزرو</li>
              <li>تماشا</li>
            </ul>
            <div className='mobile-menu-bottom'>
                <div className='menu-icon'>
                    <button className=''>پیدا کن</button>
                    <button className=''>ورود</button>
                </div>
                <div className='social-icon'>
                    <FaFacebook className="icon" />
                    <FaInstagram className="icon" />
                    <FaTwitter className="icon" />
                    <FaPinterest className="icon" />
                    <FaYoutube className="icon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar