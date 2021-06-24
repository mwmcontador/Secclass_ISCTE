import React from "react";

const Header = () => {
  return (
    <div class="container">
      <header class="row">
        <div class="col-2">
          <img
            class="img-fluid"
            src={require("../../assets/Logo/LogoSECCLasS.png")}
          />
        </div>
        <div class="col-8">
          <ul class="menu_list">
            <li>
              <a href="#">Home </a>
            </li>
            <li>
              <a href="#">Sobre </a>
            </li>
            <li>
              <a href="#">Tabela </a>
            </li>
            <li>
              <a href="#">Download </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
