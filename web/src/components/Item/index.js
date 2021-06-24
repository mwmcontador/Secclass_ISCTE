import React from "react";

const Item = ({ item }) => {
  console.log(item);
  const mostrarItem = () => {
    alert(item.titulo_SECClasS);
  };
  return (
    <tr>
      <th scope="row">{item?.code_item}</th>
      <td>{item?.titulo_SECClasS}</td>

      <td align="center">{item.nivel_item}</td>
      <td className="text-center">
        <button className="btn btn-success" onClick={mostrarItem}>
          Mostrar
        </button>
      </td>
    </tr>
  );
};

export default Item;
