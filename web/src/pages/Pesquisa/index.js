import React, { useState, useEffect } from "react";
import Item from "../../components/Item";
import api from "../../services/api";

const Pesquisa = () => {
  const contador = 0;

  //Filtros Defaut
  const [filtros, setFiltros] = useState({
    code_tabela: "Todos",
    nivel_item: 1,
    titulo_SECClasS: "",
    review: false,
  });

  console.log("Filtros Selecionados - Inicio ", filtros);
  const [itens, setItens] = useState([]);
  const [resultados, setResultados] = useState(0);
  const [item, setItem] = useState({
    code_item: "",
    title_item: "",
    nivel_item: 1,
    titulo_SECClasS: null,
  });

  //Visualizar
  const visualizar = async () => {
    try {
      const response = await api.get(
        `/search?pesquisa=${filtros.titulo_SECClasS}&tabela=${filtros.code_tabela}&nivel=${filtros.nivel_item}&revisao=${filtros.review}`
      );

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

  const getHome = async () => {
    try {
      const response = await api.get("/");
      const res = response.data;
      console.log("Home ", res.itens);
      console.log("Carregou a Pagina");
      //Testa que não tem erro
      if (res.error) {
        alert(res.message);
        return false;
      }

      setItens([...res.data]);
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
    <div className="container">
      <br />

      <div className="jumbotron">
        <div className="row">
          <div className="col">
            <h3> Pesquisar SECClasS</h3>

            <input
              className="form-control"
              placeholder="Insira Termo ou Código"
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
              <option value="Elementos/ funções"> Elementos/ funções (EF)</option>
              <option value="Sistemas"> Sistemas (Ss)</option>
              <option value="Produtos"> Produtos (Pr)</option>
              <option value="Ferramentas e Equipamentos"> Ferramentas e Equipamentos (TE)</option>
              <option value="Gestão de projeto"> Gestão de projeto (PM)</option>
              <option value="Formas de informação"> Formas de informação (FI)</option>
              <option value="Agentes"> Agentes (Ro)</option>
              <option value="CAD"> CAD (Zz)</option>
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
              <option value="4" selected>4 - Objecto</option>
            </select>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={(e) => {
                setFiltros({
                  ...filtros,

                  review: Boolean(e.target.checked),
                });
              }}
            ></input>
            <label className="form-check-label">Em Revisão</label>
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

            return <Item item={item} />;
            setResultados({ contador: contador + 1 });
          })}
        </tbody>
        <tfoot>
          <span>- </span>
        </tfoot>
      </table>
    </div>
  );
};

export default Pesquisa;
