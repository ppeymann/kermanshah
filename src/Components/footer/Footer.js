import React from "react";
import "./footer.css";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <h3>کرمانشاه</h3>
          <div className="social">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <ul>
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
          </div>
          <div className="right">
            <ul>
              <li>درباره ما</li>
              <li>قوانین تور</li>
              <li>آدرس هتل ها</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
