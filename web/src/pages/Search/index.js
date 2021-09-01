import React, { useState, useEffect } from "react";
import SearchInput from "../../components/SearchInput";

const url = "http://193.136.189.87:5003/search?&";
const Search = () => {
  /* State
        info: Gerenciar os itens exibidos
        pesquisa: Gerenciar os termos introduzizados para realizar a pesquisa.
    */
  const [info, setInfo] = useState({});
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    if (pesquisa) {
      fetch(`${url}pesquisa=${pesquisa}`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
          console.log(response);
        });
    }
    console.log(pesquisa);
  }, [pesquisa]);

  return (
    <div className="Search">
      <h1> Pesquisar Termo </h1>
      <SearchInput value={pesquisa} onChange={(termo) => setPesquisa(termo)} />
      {pesquisa && !info.data && <span>Carregando... </span>}
      {info.data && (
        <tr>
          {info.data.map((registro) => (
            <li key={registro._id}>{registro.titulo_SECClasS}</li>
          ))}
        </tr>
      )}
    </div>
  );
};

export default Search;
