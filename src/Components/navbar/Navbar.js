import React from 'react'
// icon import
import {BiSearch} from "react-icons/bi"
import {BsPerson} from "react-icons/bs"
import {HiOutlineMenu} from "react-icons/hi"
// css import
import "./NavbarStyle.css"

const Navbar = () => {
  return (
    <div className='navbar'>
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
            <BiSearch className='icon' />
            <BsPerson className="icon" />
        </div>
        <div className='hamburger'>
            <HiOutlineMenu className="icon" />
        </div>
    </div>
  )
}

export default Navbar