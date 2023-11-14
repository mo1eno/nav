import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <p>Randomaizer237+</p>
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Вопросы</span>
          <span>Помощь</span>
          <span>Поделиться</span>
        </div>
        <div className="footer-section-columns">
          <span>89025233491</span>
          <span>Randomaizer237+.com</span>
          <span>contact@Randomaizer237+.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Vne Policy🏳‍🌈</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
