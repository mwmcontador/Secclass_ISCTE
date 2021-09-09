import React, { useState } from "react";

const CommentInput = ({ comment_idItem }) => {
  const [ComentarioInput, SetComentarioInput] = useState("");
  return (
    <div className="card text-white bg-light mb-3">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item active">
            <a className="nav-link active">Comentário</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link disabled">Parametros</a>
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
            ></textarea>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4">
            <input type="text" className="form-control lg" placeholder="Nome" />
          </div>
          <div className="col-4">
            <input
              type="email"
              className="form-control"
              placeholder="usuario@seu-email.pt"
            />
          </div>
          <div className="col-4">
            <input
              type="text"
              className="form-control lg"
              placeholder="Instituição/Empresa"
            />
          </div>
        </div>
      </div>

      <button className="btn btn-primary "> Enviar {comment_idItem}</button>
    </div>
  );
};

export default CommentInput;
