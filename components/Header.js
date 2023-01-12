import React from "react";
const Header = () => {
  return (
    <div className="contentHeader">
      <h1>LOGO</h1>

      <div className="contentLink">
        <p>Accueil</p>
        <p>Cimetière</p>
        <p>A propos de nous</p>
        <p>Nous contacter</p>
      </div>

      <div className="contentButton">
        <button className="btnConnexion">Connexion</button>
        <button className="btnInscription">Inscription</button>
      </div>
    </div>
  );
};

export default Header;
