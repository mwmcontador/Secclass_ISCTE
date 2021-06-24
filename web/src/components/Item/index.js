import React from "react";

const Item = ({ item }) => {
  console.log(item[0]);
  const mostrarItem = () => {
    alert(item.titulo_SECClasS);
  };
  return (
    <tr>
      <th scope="row">{item[0]?.code_item}</th>
      <td>{item[0]?.titulo_SECClasS}</td>

      <td align="center">{item.nivel_item}</td>
      <td className="text-right">
        <button className="btn btn-success" onClick={mostrarItem}>
          Mostrar
        </button>{" "}
        <button className="btn btn-info">Comentar</button>{" "}
      </td>
    </tr>
  );
};

export default Item;
