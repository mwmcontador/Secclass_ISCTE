import React, { useState, useEffect } from "react";

import Item from "../../components/Item";
import api from "../../services/api";

const Home = () => {
  const getHome = async () => {
    try {
      const response = await api.get("/home");
      const res = response.data;

      if (res.error) {
        alert(res.message);
        return false;
      }
      console.log(res);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getHome();
  }, []);

  // LOGICA DO COMPONENTE
  const [itens, setItens] = useState([]);
  const [item, setItem] = useState({
    code_item: "",
    title_item: "",
    nivel_item: null,
  });

  const cadastrar = () => {
    setItens([...itens]);
  };

  useEffect(() => {
    console.log("Leu ");
  }, [item, ...itens]);

  //RETORNAR O HTML DO COMPONENTE
  // Quando utilizamos o parentese significa que utilizaremos codigo JSX, se fosse {} seria Javascript
  return (
    <div className="container">
      <h1>Listar Tabela</h1>
      <br />
      <div className="jumbotron">
        <div className="row"></div>
        <div className="row">
          <div className="col">
            <label> Tabela</label>
            <select className="form-control">
              <option>Complexos</option>
              <option>Entidades</option>
              <option>Actividades</option>
              <option>Espaços/ locais</option>
              <option>Elementos/ funções</option>
              <option>Sistemas</option>
              <option>Produtos</option>
            </select>
          </div>
          <div className="col-2">
            <label> Nivel</label>
            <select className="form-control">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>
        <br />
        <button onClick={cadastrar} className="btn btn-info btn-lg btn-block">
          Visualizar
        </button>
      </div>

      <table className="table table-striped table-bordered table-sm">
        <thead>
          <tr>
            <th scope="col-4">Código</th>
            <th scope="col-4">Título</th>

            <th scope="col-4">Nível</th>
            <th scope="col-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {itens.map((item) => (
            <Item item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
