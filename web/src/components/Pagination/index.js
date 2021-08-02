import React from "react";

// Definir constante das Paginas
const Max_itens = 9;
const Max_Left = (Max_itens - 1) / 2;

const Pagination = ({
  limit, //Limite por pagina
  total, //Total de Itens
  offset, //Quantos itens deveram ser pulados quando escolhemos uma pagina
  setOffset,
}) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit); // Math.ceil arrendonda para cima
  const first = Math.max(current / limit); // Math.ceil arrendonda para cima
};

export default Pagination;
