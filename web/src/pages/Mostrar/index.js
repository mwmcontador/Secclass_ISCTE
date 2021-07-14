import React, { useState, useEffect } from "react";

import Item from "../../components/Item";
import api from "../../services/api";
//import Modal from "react-bootstrap";

const Mostrar = () => {
  //Filtros Defaut
  const [filtros, setFiltros] = useState({
    code_tabela: "",
    nivel_item: 1,
    titulo_SECClasS: "",
  });

  console.log("Filtros Selecionados - Inicio ", filtros);
  const [itens, setItens] = useState([]);
  const [item, setItem] = useState({
    code_item: "",
    title_item: "",
    nivel_item: 1,
    titulo_SECClasS: null,
  });

  //Visualizar
  const visualizar = async () => {
    try {
      const response = await api.get("/");

      //const response = await api.get("/filtros/");
      const res = response.data;
      //console.log("res ", res.itens);
      console.log("Carregou os Filtros - visualizar", filtros);
      //Testa que não tem erro
      if (res.error) {
        alert(res.message);
        return false;
      }

      setItens([...res.itens]);
      console.log("Outra  Exibição", res.itens);
    } catch (err) {
      alert(err.message);
    }
  };

  //Carrega a Pagina Inicialmente
  const getHome = async () => {
    try {
      const response = await api.get("/");
      const res = response.data;
      //console.log("Home ", res.itens);
      console.log("Carregou a Pagina");
      //Testa que não tem erro
      if (res.error) {
        alert(res.message);
        return false;
      }

      setItens([...res.itens]);
      console.log("Primeira Exibição");
    } catch (err) {
      alert(err.message);
    }
  };

  // Usamos para regarregar a pagina
  useEffect(() => {
    // getHome();
  }, []);
  //Retorna o Componente
  return (
    <>
      <div className="root">
        <br />

        <div className="jumbotron">
          <div className="row">
            <div className="col">
              <h3> Pesquisar Termo </h3>

              <input
                className="form-control"
                placeholder="Informe Termo para Pesquisa"
                onChange={(e) => {
                  setFiltros({
                    ...filtros,
                    titulo_SECClasS: e.target.value,
                  });
                }}
              ></input>
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label> Tabela</label>
              <select
                className="form-control"
                onChange={(e) => {
                  if (e.target.value) {
                    setFiltros({
                      ...filtros,
                      code_tabela: e.target.value,
                    });
                  }
                }}
              >
                <option value="Todos">Todos</option>
                <option value="Complexos">Complexos (Co)</option>
                <option value="Entidades">Entidades (En)</option>
                <option value="Actividades">Actividades (Ac)</option>
              </select>
            </div>
            <div className="col-4">
              <label> Nível</label>
              <select
                className="form-control"
                onChange={(e) => {
                  setFiltros({
                    ...filtros,
                    nivel_item: Number(e.target.value),
                  });
                }}
              >
                <option value="1">1 - Grupo</option>
                <option value="2">2 - Sub-Grupo</option>
                <option value="3">3 - Secção</option>
                <option value="4">4 - Objecto</option>
              </select>
            </div>
          </div>
          <br />
          <button
            onClick={visualizar}
            className="btn btn-info btn-lg btn-block"
          >
            Visualizar
          </button>
          <br />

          <table className="table table-striped table-bordered table-sm table-hover">
            <thead>
              <tr>
                <th scope="col-4">Código</th>
                <th scope="col-4">Título</th>

                <th class="text-center" scope="col-2">
                  Tabela
                </th>
                <th class="text-center" scope="col-2">
                  Nível
                </th>

                <th class="text-center" scope="col-2">
                  Ações
                </th>
              </tr>
            </thead>

            <tbody className="table-hover">
              {itens.map((item) => {
                //Exibindo Todas as Tabelas
                if (filtros.code_tabela === "Todos") {
                  //                  return <Item item={item} />;
                  if (
                    (filtros.nivel_item === 1 && // Sempre Exibir  primeiro Nivel
                      filtros.nivel_item === item.nivel_item) ||
                    filtros.titulo_SECClasS.includes === item.titulo_SECClasS
                  ) {
                    return <Item item={item} />;
                  } else {
                    if (
                      filtros.nivel_item != 1 && // Sempre Exibir  primeiro Nivel
                      filtros.nivel_item >= item.nivel_item
                    ) {
                      return <Item item={item} />;
                    }
                  }
                } else {
                  //Filtrando de Acordo com o Filtro
                  if (
                    (filtros.code_tabela === item.code_tabela &&
                      filtros.nivel_item === 1 && // Sempre Exibir  primeiro Nivel
                      filtros.nivel_item === item.nivel_item) ||
                    filtros.titulo_SECClasS.includes === item.titulo_SECClasS
                  ) {
                    return <Item item={item} />;
                  } else {
                    if (
                      filtros.code_tabela === item.code_tabela &&
                      filtros.nivel_item != 1 && // Sempre Exibir  primeiro Nivel
                      filtros.nivel_item >= item.nivel_item
                    ) {
                      return <Item item={item} />;
                    }
                  }
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Mostrar;
