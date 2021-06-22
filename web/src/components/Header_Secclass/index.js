import React from "react";

const Header_Secclass = () => {
  return (
    <div class="container-fluid" style="background-color: #474787">
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
        <div class="col-2">
          <br />
          <button class="btn btn-lg btn-custom-blue text-white">
            Pesquisar
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header_Secclass;
