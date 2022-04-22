import React from "react";
import { Mainn } from "../styles/main-content";
import Logo from "../assets/logo-lol.svg";

function Main() {
  return (
    <Mainn>
      <div className="page-logo">
        <div className="logo-content">
          <img src={Logo} alt="logo" />
          <p>Riot Games</p>
        </div>
      </div>
    </Mainn>
  );
}

export default Main;
