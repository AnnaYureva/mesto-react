import React from "react";
import Logo from "../images/Logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" alt="Логотип" src={Logo} />
    </header>
  );
}

export default Header;
