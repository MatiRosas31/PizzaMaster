import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const OrderModal = () => {
  const { store, actions } = useContext(Context);
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header row">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              <strong>Ya casi esta tu pizza! 🍕➡</strong> Por favor ingresa tus
              datos para hacer tu orden:
            </h1>
            <div className="modal-body">
              <form className="form-group row">
                <label htmlFor="name" className="form-label fw-bolder">
                  Nombre:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Fulanito de Tal"
                />
                <label htmlFor="address" className="form-label fw-bolder">
                  Dirección:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Fake Address 1234"
                />
                <label htmlFor="phone" className="form-label fw-bolder">
                  Teléfono:
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="099123456"
                />
              </form>
            </div>
          </div>
          <div className="modal-body">
            <h5 className="fw-bolder"> Ingredientes seleccionados:</h5>
            {store.selectedIngredients.length > 0 ? (
              store.selectedIngredients.map((ingredient, index) => (
                <span key={index} className="badge orangebtn me-2 mb-2">
                  {ingredient}
                </span>
              ))
            ) : (
              <span>
                <strong>Espera!</strong> No has agregado ningun ingrediente a tu
                pizza! 😮
              </span>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button type="button" className="btn btn-success">
              Listo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
