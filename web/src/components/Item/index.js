import React from "react";

/*const Item = ({}) =>
o ({}) é uma desestruturação

por exemplo 
const Item = ({item}) => {
console.log (props)  // ja podemos ver no navegador o objeto
*/
const Item = ({ item }) => {
  return (
    <tr>
      <td>{item.codigo}</td>
      <td>{item.titulo}</td>
      <td>{item.nivel}</td>
      <td>
        <button type="button" className="btn btn-info">
          Mostrar
        </button>
      </td>
    </tr>
  );
};

export default Item;
