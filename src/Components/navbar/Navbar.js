import React, { useState } from "react";
// icon import
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
// css import
import "./NavbarStyle.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activate, setActivate] = useState(false);
  const handleNav = () => setActivate(!activate);

  return (
    <div className={activate ? "navbar navbar-bg" : "navbar"}>
      <div className={activate ? "logo dark" : "logo"}>
        <h2>کرمانشاه</h2>
      </div>
      <ul className="nav-menu">
        <Link smooth={true} duration={500} to="home">
          <li>خانه</li>
        </Link>
        <Link smooth={true} duration={500} to="desti">
          <li>مقصد</li>
        </Link>
        <Link smooth={true} duration={500} to="search">
          <li>تور ها</li>
        </Link>
        <Link smooth={true} duration={500} to="search">
          <li>رزرو هتل</li>
        </Link>
        <Link smooth={true} duration={500} to="select">
          <li>تماشا</li>
        </Link>
      </ul>
      <div className={activate ? "nav-icons dark" : "nav-icons"}>
        <BiSearch className="icon" style={{ marginLeft: "1rem" }} />
        <BsPerson className="icon" />
      </div>
      <div
        className={activate ? "hamburger dark" : "hamburger"}
        onClick={handleNav}
      >
        {!activate ? (
          <HiOutlineMenu className="icon" />
        ) : (
          <AiOutlineClose className="icon" />
        )}
      </div>
      <div className={activate ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <Link smooth={true} duration={500} to="home">
            <li>خانه</li>
          </Link>
          <Link smooth={true} duration={500} to="desti">
            <li>مقصد</li>
          </Link>
          <Link smooth={true} duration={500} to="search">
            <li>تور ها</li>
          </Link>
          <Link smooth={true} duration={500} to="search">
            <li>رزرو هتل</li>
          </Link>
          <Link smooth={true} duration={500} to="select">
            <li>تماشا</li>
          </Link>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icon">
            <button className="">پیدا کن</button>
            <button className="">ورود</button>
          </div>
          <div className="social-icon">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
