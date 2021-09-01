import React from "react";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }

  handleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <div>
        <Button onClick={() => this.handleModal()}> Abrir Modal</Button>
        <Modal show={this.state.showModal} backdrop="static" size="lg">
          <Modal.Header closeButton>Item</Modal.Header>
          <Modal.Body>
            <div class="row">
              <div class="col-2">Código</div>
              <div class="col-2">Nível</div>
              <div class="col-8">Secclass</div>
            </div>
            <div class="row">
              <div class="col-2">Co_20_10_60</div>
              <div class="col-2">4</div>
              <div class="col-8">
                Complexos de manutenção e abastecimento de veículos motorizados
              </div>
            </div>
            <div class="row">
              <div class="col-2">Tabela</div>
              <div class="col-2">PR</div>
              <div class="col-8">Produtos</div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="row">
              <div className="col">
                <button className="btn-info">Comentar</button>
                {"  "}
                <button className="btn-info">Traduzir</button> {"  "}
                <button
                  className="btn-secondary"
                  onClick={() => this.handleModal()}
                >
                  Cancelar
                </button>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <h1>Comentários</h1>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default Test;
