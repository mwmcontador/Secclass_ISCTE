import React, { useState } from "react";
import CommentInput from "./ComentariosInput/CommentInput";
import CommentList from "./CommentList/CommentList";
import Pagination from "../Pagination/Pagination";
const Comentarios = ({ id_idtem_secclass }) => {
  const [comment, setComment] = useState([]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <a> {id_idtem_secclass}</a>
        </div>
      </div>
      <br />
      <div className="comment-input">
        <CommentInput comment_idItem="1111" />
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
            <th>Ações</th>
          </tr>
        </thead>

        <tbody className="table-hover">
          <CommentList comment_id={"111"} />{" "}
          {/*
          {comment.map((item) => {
            //Exibindo Todas as Tabelas

            return (
              <>
                <a>Começa aqui</a>
                <CommentList comment_id={"111"} />
                <a>Termina aqui</a>
              </>
            
          }}
          */}
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
