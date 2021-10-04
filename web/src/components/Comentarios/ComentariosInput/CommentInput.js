import React, { useState } from "react";
import api from "../../../services/api";

const CommentInput = ({ comment_idItem }) => {
  const [ComentarioInput, SetComentarioInput] = useState({
    items_id: comment_idItem,
  });
  //

  const CleanFilter = () => {
    SetComentarioInput({
      ...ComentarioInput,
      comment: "",
      name: "",
      institution: "",
      comment: "",
    });
  };
  //function PostComment
  const PostComent = () => {
    try {
      const response = api.post("/comment", ComentarioInput);
    } catch (err) {
      alert(err.message);
      return false;
    }
    alert(
      "Obrigado pelo seu comentário, vamos procurar incluí-lo na revisão do SECClasS"
    );
    console.log(ComentarioInput);
    SetComentarioInput({
      ...ComentarioInput,
      comment: "",
      name: "",
      institution: "",
      comment: "",
    });
  };

  return (
    <div className="card text-white bg-light mb-3">
      <div className="card">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item active">
            <a className="nav-link active" href="#">
              Hierarquia
            </a>{" "}
          </li>{" "}
          <li className="nav-item active">
            <a className="nav-link active">Comentários</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link disabled">Parâmetros</a>
          </li>
        </ul>
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col">
            <textarea
              type="textarea"
              className="form-control"
              placeholder="Insira aqui seu comentário"
              onChange={(e) => {
                SetComentarioInput({
                  ...ComentarioInput,
                  comment: e.target.value,
                });
              }}
            ></textarea>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              className="form-control lg"
              placeholder="Nome"
              onChange={(e) => {
                SetComentarioInput({
                  ...ComentarioInput,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className="col-4">
            <input
              type="email"
              className="form-control"
              placeholder="nome@email.pt"
              onChange={(e) => {
                SetComentarioInput({
                  ...ComentarioInput,
                  contact: e.target.value,
                });
              }}
            />
          </div>
          <div className="col-4">
            <input
              type="text"
              className="form-control lg"
              placeholder="Instituição/Empresa"
              onChange={(e) => {
                SetComentarioInput({
                  ...ComentarioInput,
                  institution: e.target.value,
                });
              }}
            />
          </div>
        </div>
      </div>

      <button className="btn btn-success" type="submit" onClick={PostComent}>
        Enviar
      </button>
    </div>
  );
};

export default CommentInput;
