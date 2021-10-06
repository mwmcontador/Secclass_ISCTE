import React, { useState, useEffect } from "react";
import Item from "../../components/Item";
import Pagination from "../../components/Pagination/Pagination";
import api from "../../services/api";

const LIMIT_PADRAO = 50;

const Revisao = () => {
  //Filtros Defaut
  const [filtros, setFiltros] = useState({
    code_tabela: "Todos",
    nivel_item: 4,
    titulo_SECClasS: "",
    Especialidade: "",
  });

  const [itens, setItens] = useState([]);
  const [offset, setOffset] = useState(0);
  const [LIMIT, setLIMIT] = useState({ value: LIMIT_PADRAO });

  console.log("Filtros Selecionados - Inicio ", filtros);
  console.log("Limite", LIMIT);

  //Visualizar
  const visualizar = async () => {
    try {
      //Url de pesquisa da API
      const urlFiltros = `${filtros.titulo_SECClasS}&tabela=${filtros.code_tabela}&nivel=${filtros.nivel_item}&especialidade=${filtros.Especialidade}`;
      console.log("urlFiltros ", urlFiltros);
      const response = await api.get(`/search?pesquisa=${urlFiltros}`);

      //const response = await api.get("/filtros/");
      const res = response.data;
      console.log("res ", res);
      console.log("Carregou os Filtros - visualizar", filtros);

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

  // Usamos para regarregar a pagina
  useEffect(() => {
    // setLIMIT();
  }, []);
  //Retorna o Componente
  return (
    <div className="container">
      <br />

      <div className="jumbotron container lg">
        <div className="row">
          <div className="col">
            <input
              className="form-control"
              placeholder="Código ou Termo a pesquisar"
              onChange={(e) => {
                setFiltros({
                  ...filtros,
                  titulo_SECClasS: e.target.value,
                });
              }}
              onBlur={(e) => {
                visualizar();
              }}
            ></input>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
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
              <option value="Todos">Todas</option>
              <option value="Complexos">Complexos (Co)</option>
              <option value="Entidades">Entidades (En)</option>
              <option value="Actividades">Actividades (Ac)</option>
              <option value="Espaços/ locais"> Espaços/ locais (SL)</option>
              <option value="Elementos/ funções">
                {" "}
                Elementos/ funções (EF)
              </option>
              <option value="Sistemas"> Sistemas (Ss)</option>
              <option value="Produtos"> Produtos (Pr)</option>
              <option value="Ferramentas e Equipamentos">
                {" "}
                Ferramentas e Equipamentos (TE)
              </option>
              <option value="Gestão de projeto"> Gestão de projeto (PM)</option>
              <option value="Formas de informação">
                {" "}
                Formas de informação (FI)
              </option>
              <option value="Agentes"> Agentes (Ro)</option>
              <option value="CAD"> CAD (Zz)</option>
            </select>
          </div>
          <div className="col-4">
            <label className="text-bold">Nível</label>

            <select
              className=" form-control  "
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
          <div className="col-4">
            <label>Revisão por especialidade</label>
            <select
              className="form-control"
              onChange={(e) => {
                setFiltros({
                  ...filtros,
                  Especialidade: e.target.value,
                });
              }}
            >
              <option value="" selected>
                ---
              </option>
              <option value="Todas">Todas as Especialidades</option>
              <option value="Genérico">Genérico</option>
              <option value="Arquitetura">Arquitetura</option>
              <option value="Climatização">Climatização</option>
              <option value="Desenho CAD">Desenho CAD</option>
              <option value="Eletricidade e Telecomunicações">
                Eletricidade e Telecomunicações
              </option>
              <option value="Eng. Ferroviária">Eng. Ferroviária</option>
              <option value="Eng. Hidráulica">Eng. Hidráulica</option>
              <option value="Eng. Mecânica">Eng. Mecânica</option>
              <option value="Eng. Naval">Eng. Naval</option>
              <option value="Eng. Rodoviária">Eng. Rodoviária</option>
              <option value="Ensino">Ensino</option>
              <option value="Estruturas">Estruturas</option>
              <option value="Facility Management">Facility Management</option>
              <option value="Geotecnia">Geotecnia</option>
              <option value="Gestão de projeto">Gestão de projeto</option>
              <option value="Gestão de resíduos">Gestão de resíduos</option>
              <option value="Médico Hospitalar">Médico Hospitalar</option>
              <option value="Paisagismo">Paisagismo</option>
              <option value="Redes Prediais">Redes Prediais</option>
              <option value="Serviços de Segurança e Incêndio">
                Serviços de Segurança e Incêndio
              </option>
              <option value="Sistemas Construtivos">
                Sistemas Construtivos
              </option>
              <option value="Topografia">Topografia</option>
            </select>
          </div>
        </div>
        <br />
        <button
          onClick={visualizar}
          className="btn btn-listar btn-lg btn-block"
          background-color="#474787"
        >
          Visualizar
        </button>
      </div>
      <div className="row">
        <div className="col">
          <span>Resultados: {itens.length}</span>
        </div>
        {/* 
        <div className="col">
          <Pagination
            limit={LIMIT.value}
            total={itens.length}
            offset={offset}
            setOffset={setOffset}
          />
        </div>
        <div className="col-2">
          <select
            className="form-control"
            onChange={(e) => {
              setLIMIT({
                ...LIMIT,
                value: e.target.value,
              });
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="30">30</option>
            <option value="50" selected>
              50
            </option>
          </select>
        </div>
        */}
        <div>
          <div className="container">
            <div className="row"></div>
            <div className="row"></div>
          </div>
          <br />
        </div>
      </div>
      <br />
      <div className="container">
        <table className="table table-striped table-lg">
          <tr>
            <th scope="col-4">Código</th>
            <th class="text-center" scope="col-2"></th>
            <th scope="col-4">Título (PT)</th>
            <th scope="col-4">Title (EN)</th>
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
          <tbody className="table-striped">
            {itens.map((item) => {
              //Exibindo Todas as Tabelas

              return <Item item={item} />;
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  );
};

/*
<div className="row">
        <div className="col"></div>
        <div className="col-3 text-right">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={(e) => {
              setFiltros({
                ...filtros,

                review: Boolean(e.target.checked),
              });
            }}
          />
          <label className="form-check-label pandding">Em Revisão </label>
        </div>
      </div>

*/

export default Revisao;
