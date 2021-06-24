import React from "react";
const Filtro_Tabela = () => {
  return (
    <div className="jumbotron">
      <div className="row"></div>
      <div className="row">
        <div className="col">
          <label> Tabela</label>
          <select
            className="form-control"
            /*
            onChange={(e) => {
              setFiltros({
                ...filtros,
                filtroTabela: e.target.value,
              });
            }}
            */
          >
            <option>Complexos</option>
            <option>Entidades</option>
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
      <button className="btn btn-info btn-lg btn-block">Visualizar</button>
    </div>
  );
};
export default Filtro_Tabela;
