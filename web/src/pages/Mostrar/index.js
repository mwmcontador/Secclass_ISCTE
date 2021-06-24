import React, { useState, useEffect } from "react";
import Item from "../../components/Item";
import api from "../../services/api";

const Mostrar = () => {
  //Filtros Defaut
  const [filtros, setFiltros] = useState({
    filtroTabela: "Complexos",
    filtroNivel: 1,
  });

  console.log(filtros);
  const [itens, setItens] = useState([]);
  const [item, setItem] = useState({
    code_item: "",
    title_item: "",
    nivel_item: null,
  });

  //Visualizar
  const visualizar = async () => {
    try {
      const response = await api.get("/");
      const res = response.data;
      console.log(res);
      console.log("Carregou os Filtros");
      //Testa que não tem erro
      if (res.error) {
        alert(res.message);
        return false;
      }

      setItens([...itens]);
      console.log("Outra  Exibição");
    } catch (err) {
      alert(err.message);
    }
  };

  //Exibir Tabela
  const ExibirTabela = async ({ nometabela }) => {
    try {
      const response = await api.get("/");
      const res = response.data;

      if (res.error) {
        alert(res.message);
        return false;
      }
    } catch (err) {
      alert(err.message);
    }
  };
  const getHome = async () => {
    try {
      const response = await api.get("/");
      const res = response.data;
      console.log(res);
      console.log("Carregou a Pagina");
      //Testa que não tem erro
      if (res.error) {
        alert(res.message);
        return false;
      }

      setItens([...itens]);
      console.log("Primeira Exibição");
    } catch (err) {
      alert(err.message);
    }
  };

  // Usamos para regarregar a pagina
  useEffect(() => {
    getHome();
  }, []);
  //Retorna o Componente
  return (
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
                  filtroNivel: Number(e.target.value),
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
        <button onClick={visualizar} className="btn btn-info btn-lg btn-block">
          Visualizar
        </button>
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
    </div>
  );
};

export default Mostrar;
