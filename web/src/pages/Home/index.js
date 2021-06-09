import React, { useState, useEffect } from "react";

import Item from "../../components/Item";
import api from "../../services/api";

const Home = () => {
<<<<<<< Updated upstream
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
  }, [itens]);

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
=======
  //Lógica do Componente

  //Exibição do Componente
  return (
    // <!-- Modal -->
    <div       class="modal fade"
      id="modal-item"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
      >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Item
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-2">Código</div>
              <div class="col-2">Nível</div>
              <div class="col-8">Secclass</div>
            </div>
            <div class="row">
              <div class="col-2">Co_20_10_60</div>
              <div class="col-2">4</div>
              <div class="col-8">
                Complexos de manutenção e abastecimento de veículos motorizados
              </div>
            </div>
            <div class="row">
              <div class="col-2">Tabela</div>
              <div class="col-2">PR</div>
              <div class="col-8">Produtos</div>
            </div>
          <div className="col-8">
            <label>Título</label>
            <input type="text" className="form-control"></input>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
      </div>
>>>>>>> Stashed changes
    </div>
  );
};

export default Home;
