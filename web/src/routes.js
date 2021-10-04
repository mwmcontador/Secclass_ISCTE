import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/login";
import Home from "./pages/Pesquisa";
import Mostrar from "./pages/Mostrar";
import Pesquisa from "./pages/Pesquisa";
import Test from "./pages/Test";
import Testar from "./pages/Testar";
import Revisao from "./pages/Revisao";

const Routes = () => {
  //Variavel para controle de usuario
  //const logado = localStorage.getItem("@user");
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Pesquisa} />
        <Route path="/login" exact component={Login} />
        <Route path="/mostrar" exact component={Mostrar} />
        <Route path="/pesquisa" exact component={Pesquisa} />
        <Route path="/test" exact component={Test} />
        <Route path="/testar" exact component={Testar} />
        <Route path="/revisao" exact component={Revisao} />
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
