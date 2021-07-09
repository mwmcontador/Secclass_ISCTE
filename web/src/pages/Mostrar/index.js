import React, { useState, useEffect } from "react";
import Item from "../../components/Item";

import api from "../../services/api";
import Modal from "react-bootstrap";

const Mostrar = () => {
  //Filtros Defaut
  const [filtros, setFiltros] = useState({
    filtroTabela: "",
    filtroNivel: 1,
    filtroPesquisa: "",
  });

  console.log("Filtros Selecionados ", filtros);
  const [itens, setItens] = useState([]);
  const [item, setItem] = useState({
    code_item: "",
    title_item: "",
    nivel_item: null,
    titulo_SECClasS: null,
  });

  //Visualizar
  const visualizar = async () => {
    try {
      const response = await api.get("/");
      const res = response.data;
      //console.log("res ", res.itens);
      console.log("Carregou os Filtros");
      //Testa que não tem erro
      if (res.error) {
        alert(res.message);
        return false;
      }

      setItens([...res.itens]);
      console.log("Outra  Exibição", res.itens.length);
    } catch (err) {
      alert(err.message);
    }
  };

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
                    filtroPesquisa: e.target.value,
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
                      filtroTabela: e.target.value,
                    });
                  }
                }}
              >
                <option value="">Todos</option>
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
                    filtroNivel: Number(e.target.value),
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

          <table className="table table-striped table-bordered table-sm">
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

            <tbody>
              {itens.map((item) => {
                //console.log("filtro NIvel", typeof filtros.filtroNivel);
                //console.log("Item Nivel", typeof item.nivel_item);
                //console.log("Item Nivel", item.nivel_item);
                if (
                  (filtros.filtroTabela === item.code_tabela &&
                    filtros.filtroNivel === 1 && // Sempre Exibir  primeiro Nivel
                    filtros.filtroNivel === item.nivel_item) ||
                  filtros.filtroPesquisa.includes === item.titulo_SECClasS
                ) {
                  console.log(
                    filtros.filtroPesquisa.includes === item.titulo_SECClasS
                  );
                  return <Item item={item} />;
                } else {
                  if (
                    filtros.filtroTabela === item.code_tabela &&
                    filtros.filtroNivel != 1 && // Sempre Exibir  primeiro Nivel
                    filtros.filtroNivel >= item.nivel_item
                  ) {
                    console.log("2 if", item);
                    return <Item item={item} />;
                  }
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="portal-root">
        <Modal>
          <h1>Teste</h1>
        </Modal>
      </div>
    </>
  );
};

export default Mostrar;
