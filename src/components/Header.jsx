import React from "react";
import { Bar } from "../styles/Bar";
import Logo from "./../assets/profile-logo.jpg";

function Header() {
  return (
    <Bar>
      <nav className="header-navigation">
        <ul>
          <li>
            <p>Github</p>
          </li>
          <li>
            <p>Linkedin</p>
          </li>
          <li>
            <p id="active">Desáfio</p>
          </li>
        </ul>
      </nav>
      <div className="page-logo">
        <h1 id="logo">MUSIC LEGENDS</h1>
      </div>
      <div className="user">
        <p id="user-name">João :3</p>
        <img src={Logo} alt="" id="user-icon" />
      </div>
    </Bar>
  );
}

export default Header;
