import React, { useState } from "react";

import useDebounce from "../../function/useDebounce";

const SearchInput = ({ value, onChange }) => {
  //State com um temporizador, que aguarda à.5 segundos antes de envia a pesquisa.
  const [displayValue, setDisplayValue] = useState(value);
  //DebouncedChange é a função que toda vez que mudamos o state definimos um tempo para que ele seja executado
  //Hook utilizado useDebounce // Tempo em microsegundos
  const debouncedChange = useDebounce(onChange, 500);

  //Transformar um evento em um texto
  function handleChange(event) {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  }
  return (
    <div>
      <input
        type="search"
        className="form-control"
        placeholder="Informe Termo para Pesquisa"
        value={displayValue}
        onChange={handleChange}
      />
    </div>
  );
};
export default SearchInput;
