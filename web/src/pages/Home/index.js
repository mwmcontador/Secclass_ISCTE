import React, { useState, useEffect } from "react";

import Item from "../../components/Item";
import Modalitem from "../../components/ModalItem";

import api from "../../services/api";

const Home = () => {
  const [filtros, setFiltros] = useState({
    filtroTabela: "",
    filtroNivel: "",
  });

  const listar = async () => {
    try {
      const response = await api.post("/lista/");
    } catch (err) {
      alert(err.message);
    }
  };

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
    setItens([item, ...itens]);
  };

  useEffect(() => {
    console.log("Index. Home ");
  }, [itens]);

  //RETORNAR O HTML DO COMPONENTE
  // Quando utilizamos o parentese significa que utilizaremos codigo JSX, se fosse {} seria Javascript
  return (
    <>
      <div>
        <Modalitem />
      </div>
      <div className="container">
        <h1>Listar Tabela</h1>
        <br />

        <div className="jumbotron">
          <div className="row"></div>
          <div className="row">
            <div className="col">
              <label> Tabela</label>
              <select
                className="form-control"
                onChange={(e) => {
                  setFiltros({
                    ...filtros,
                    filtroTabela: e.target.value,
                  });
                }}
              >
                <option>Complexos</option>
                <option>Entidades</option>
              </select>
            </div>
            <div className="col-2">
              <label> Nivel</label>
              <select
                className="form-control"
                onChange={(e) => {
                  setFiltros({
                    ...filtros,
                    filtroNivel: e.target.value,
                  });
                }}
              >
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
    </>
  );
};

export default Home;
