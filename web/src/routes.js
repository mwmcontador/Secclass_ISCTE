import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/login";
import Home from "./pages/Home";
import Mostrar from "./pages/Mostrar";
import Pesquisa from "./pages/Pesquisa";

const Routes = () => {
  //Variavel para controle de usuario
  //const logado = localStorage.getItem("@user");
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/mostrar" exact component={Mostrar} />
        <Route path="/pesquisa" exact component={Pesquisa} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

// Para implementar os login
/*
return (
  <BrowserRouter>
    <Switch>
      {!logado && <Route path="/" exact component={Home} />}
      {logado && <Route path="/" exact component={Login} />}
    </Switch>
  </BrowserRouter>
);
*/
