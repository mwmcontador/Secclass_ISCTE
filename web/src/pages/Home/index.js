import React, { useS, useState, useEffect } from "react";
import Item from "../../components/Item";

const Home = () => {
  //Lógica do Componente
  const [itens, setItens] = useState([]);
  const [item, setItem] = useState({
    codigo: "",
    titulo: "",
    nivel: null,
  });
  // const visualizar = () => {
  //   setItens[item]; // esta errado so coloquei para passar
  // };

  useEffect(() => {
    console.log("UseEffect");
  }, [itens]);
  //Exibição do Componente
  return (
    <div className="container">
      <h1>Listar Itens</h1>
      <br />
      <div className="jumbotron">
        <div className="row">
          <div className="col-2">
            <label>Código</label>
            <input type="text" className="form-control"></input>
          </div>
          <div className="col-8">
            <label>Título</label>
            <input type="text" className="form-control"></input>
          </div>
          <div className="col-2">
            <label>Nível</label>
            <select className="form-control">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        <br />
        <button className="btn btn-lg btn-success btn-block">Visualizar</button>
      </div>

      <table class="table table-striped ">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Código</th>
            <th scope="col">Título</th>
            <th scope="col">Nível</th>
            <th scope="col text-center">Ações</th>
          </tr>
        </thead>
        <tbody>{itens.map((item) => Item)}</tbody>
      </table>
    </div>
  );
};

export default Home;
