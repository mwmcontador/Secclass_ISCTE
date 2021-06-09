import React from "react";

const Modal_Item = () => {
  return (
    <div
      class="modal fade"
      id="modal-item"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Item
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
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
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">
              Comentar
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal_Item;
