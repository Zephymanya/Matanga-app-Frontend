import React from "react";

import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="contentFooter">
      <div className="footerLogo">
        <h1>LOGO</h1>
      </div>
      <div className="footerLink">
        <p>Cimetière</p>
        <p>A propos de nous</p>
        <p>Nous contacter</p>
        <p>Politique de confidentialité</p>
      </div>
      <div className="footerIcons">
        <div className="icons">
          <h1>
            {" "}
            <BsFacebook />
          </h1>
          <h1>
            {" "}
            <BsTwitter />
          </h1>
          <h1>
            {" "}
            <BsInstagram />
          </h1>
        </div>
        <div className="copyright">
          <p>©2022</p>
          <p className="colorMatanga">Matanga</p>
          <p>Designer & développer par Flyts & Manya</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
