import React, { useState } from "react";
import Comentarios from "../Comentarios/comentarios";

import { Modal } from "react-bootstrap";
const url = "https://toolkit.thenbs.com/uniclass/";

const Item = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const ModalOriginal = (props) => {
    return (
      <>
        <Modal
          show={showModal}
          onHide={mostrarItem}
          backdrop="static"
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <script>var={item.code_item}</script>

            <div>
              <div class="row">
                <div class="col-3">
                  <b>Tabela</b>
                </div>
                <div class="col-9">{item.code_tabela}</div>
              </div>
              <div class="row">
                <div class="col-3">
                  <b>Código</b>
                </div>
                <div class="col-8">{item.code_item}</div>
              </div>
              <div class="row">
                <div class="col-3">
                  <b>Título SECClasS </b>
                </div>
                <div class="col-8">{item?.titulo_SECClasS}</div>
              </div>
              <div class="row">
                <div class="col-3">
                  <b>Título Uniclass 2015</b>
                </div>
                <div class="col-8">
                  <console className="log" value={url}>
                    {" "}
                  </console>
                  <a href={url + item.code_item} target="_blank">
                    {item.title_item}
                  </a>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <b>Versão SECClasS</b>
                </div>
                <div class="col-8">1.0{item.versao}</div>
              </div>
              <div class="row">
                <div class="col-3">
                  <b>Descrição</b>
                </div>
                <div class="col-8">{item.descricao_SECClasS}</div>
              </div>
              <div className="row">
                <div className="col">
                  <Comentarios id_idtem_secclass="60d41ae8ddc3ec53204c81da" />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="row">
              <div className="col">
                <button className="btn-info">Comentar</button>
                {"  "}

                <button className="btn-secondary" onClick={mostrarItem}>
                  Cancelar
                </button>
                <br />
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  const mostrarItem = () => {
    //alert(item.titulo_SECClasS);
    console.log("Mudar State Modal", showModal);
    setShowModal(!showModal);
  };
  return (
    <tr class="table table-hover">
      {showModal && <ModalOriginal props={item} />}
      <td scope="row">{item?.code_item}</td>
      <td>{item?.titulo_SECClasS}</td>
      <td align="center">{item.code_tabela}</td>
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
