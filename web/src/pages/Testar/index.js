import React from "react";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";

const Testar = () => {
  //Setar as Variaveis iniciais
  const mostrarModal = () => {
    //Investe o state do Showmodal
    this.setState({ showModal: !this.state.showModal });
  };
  return (
    <>
      <button onClick> Mostrar</button>
    </>
  );
};

export default Testar;
