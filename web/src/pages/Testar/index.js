import React, { useState, useEffect } from "react";
import Item from "../../components/Item/";
import api from "../../services/api";

const Testar = () => {
  //Filtros Defaut
  const [filtros, setFiltros] = useState({
    code_tabela: "Todos",
    nivel_item: 4,
    titulo_SECClasS: "",
  });

  // console.log("Filtros Selecionados - Inicio ", filtros);
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
      // console.log("sa", api.get(`search?pesquisa=&tabela=`));
      const response = await api.get("/search?pesquisa=parques em");
      console.log("get ", api.get("/search?pesquisa=parques em"));
      const res = response.data;
      console.log("res ", res.data);
      //Testa que não tem erro
      if (res.error) {
        alert(res.message);
        return false;
      }

      setItens([...res.data]);
      console.log("Outra  Exibição", res.data);
    } catch (err) {
      alert(err.message);
    }
  };

  //Retorna o Componente
  return (
    <div className="container">
      <br />

      <div className="jumbotron">
        <div className="row">
          <div className="col">
            <h3> Pesquisar Termo </h3>

            <input
              className="form-control"
              placeholder="Informe Termo para Pesquisa"
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
                setFiltros({
                  ...filtros,
                  code_tabela: e.target.value,
                });
              }}
            >
              <option value="Todos">Todos</option>
              <option value="Complexos">Complexos (Co)</option>
              <option value="Entidades">Entidades (En)</option>
              <option value="Actividades">Actividades (Ac)</option>
              <option value="Espaços/ locais"> Espaços/ locais (Ss)</option>
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
              <option value="4" selected>
                4 - Objecto
              </option>
            </select>
          </div>
        </div>
        <br />
        <button onClick={visualizar} className="btn btn-info btn-lg btn-block">
          Visualizar
        </button>
        <br />
      </div>
      <table className="table table-striped table-sm ;">
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
            <Item item={item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Testar;
