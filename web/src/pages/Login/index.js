import React, { useState, useEffect } from "react";

const Login = () => {
  return (
    <div class="container-fluid">
      <header class="row">
        <img className="img-fluid" src="../assets/Logo/LogoSECCLasS.png" />
      </header>
      <div id="caixa-login" class="col-4 offset-4">
        <h1 class="text-white">Entrar</h1>
        <br />
        <form>
          <input
            type="email"
            class="form-control form-control-lg"
            placeholder="Insira o Email"
          />
          <br />
          <input
            type="password"
            class="form-control form-control-lg"
            placeholder="Senha"
          />
          <br />
          <button class="btn btn-lg btn-block btn-info">Acessar</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
