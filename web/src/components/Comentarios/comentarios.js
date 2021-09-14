import React, { useState } from "react";
import CommentInput from "./ComentariosInput/CommentInput";
import CommentList from "./CommentList/CommentList";
import Pagination from "../Pagination/Pagination";
import api from "../../services/api";

const Comentarios = ({ id_idtem_secclass }) => {
  const [comment, setComment] = useState([]);
  const [showInput, setShowInput] = useState(false);

  const MostrarInput = (showInput) => {
    MostrarInput = setShowInput(!showInput);
  };

  const ListComment = async () => {
    try {
      const response = await api.get(`/comment/iditem/${id_idtem_secclass}`);
      const res = response.data;

      if (res.error) {
        alert(res.message);
        return false;
      }
      setComment([...res.data]);
      console.log("Lista do Comentario", res.data);
    } catch (err) {
      alert(err.message);
      return false;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <a> </a>
        </div>
      </div>
      <br />
      <div className="comment-button-comand row">
        <div className="col-3">
          <button className="btn btn-primary" onClick={ListComment}>
            Ver Comentários
          </button>
        </div>

        <div className="col-4">
          <button className="btn btn-success">Enviar Comentário</button>
        </div>
      </div>
      <div className="comment-input " display="none">
        <br />
        <CommentInput comment_idItem={id_idtem_secclass} />
      </div>
      <table className="table table-striped ">
        <thead>
          <tr>
            <th>Data</th>
            <th>Comentário</th>

            <th class="text-center" scope="col">
              Autor
            </th>
            <th class="text-center" scope="col">
              Instituição
            </th>
            <th class="text-center" scope="col">
              Status
            </th>
          </tr>
        </thead>

        <tbody className="table-hover">
          {comment.map((comentario) => {
            //Exibindo Todas as Tabelas

            return <CommentList comment_id={comentario} />;
          })}{" "}
        </tbody>
        <tfoot>
          <span>- </span>
        </tfoot>
      </table>
      <div className="row">
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Comentarios;
