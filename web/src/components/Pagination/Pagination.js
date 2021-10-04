import React, { useState } from "react";

//Número de Botões
const max_itens = 9;

//Número de Botões para esquerda
const max_left = (max_itens - 1) / 2;

const Pagination = ({ limit, total, offset, setOffset }) => {
  /*
    limit: Quantos itens vamos emitir por pagina
    total: Total de Itens
    offset: Quantos itens devemos pular, para posicionar os itens no lugar certo

    */

  //Realizamos este teste para assegurar quando o offset é zero, ele estabilize na pagina 1
  const current = offset ? offset / limit + 1 : 1;

  //Quando o Resultado da Total de Paginas pelo limite dar uma dizima, arrendodamos
  const pages = Math.ceil(total / limit);
  //Primeira Botão
  //Verifica que o primeira pagina e no minimo 1
  const first = Math.max(1, current - max_left);
  console.log("Paginas ", pages);
  console.log("Total ", total);
  console.log("Limite ", limit);
  return (
    <ul className="Pagination">
      {Array.from({ length: Math.min(max_itens, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <button
              className="btn btn-primary"
              onClick={() => setOffset((page - 1) * limit)}
            >
              {page}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Pagination;
