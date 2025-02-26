import React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/order.css"; // Asegúrate de importar el archivo CSS
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

const Order = () => {
  const { store } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div
      id="wholeContainerOrder"
      className="container my-5 d-flex justify-content-center align-items-center"
    >
      <div className="card bg-white">
        <div className="card-header">
          <h1 className="card-title fs-5">
            <strong>Ya casi esta tu pizza! 🍕➡</strong> Por favor ingresa tus
            datos para hacer tu orden:
          </h1>
        </div>
        <div className="card-body pb-1 px-1">
          {/*AQUI COMIENZA EL FORM */}
          <Formik
            onSubmit={() => {
              console.log("Formulario enviado");
            }}
            initialValues={{
              name: "",
              address: "",
              phone: "",
              size: "",
              drink: "",
            }}
          >
            {({ values, handleSubmit, handleChange }) => (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bolder">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Fulanito de Tal"
                    value={values.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label fw-bolder">
                    Dirección:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    placeholder="Fake Address 1234"
                    value={values.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fw-bolder">
                    Teléfono:
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="099123456"
                  />
                </div>
                <div className="mb-3">
                  <h5 className="fw-bolder"> Ingredientes seleccionados:</h5>
                  {store.selectedIngredients.length > 0 ? (
                    store.selectedIngredients.map((ingredient, index) => (
                      <span key={index} className="badge orangebtn me-2 mb-2">
                        {ingredient}
                      </span>
                    ))
                  ) : (
                    <span>
                      <strong>Espera!</strong> No has agregado ningun
                      ingrediente a tu pizza! 😮
                    </span>
                  )}
                </div>
                <div className="mb-3">
                  <h5 className="fw-bolder">Tamaño de la pizza 📏</h5>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      value="small"
                    />
                    <label className="form-check-label" htmlFor="small">
                      Pequeña
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      value="medium"
                    />
                    <label className="form-check-label" htmlFor="medium">
                      Mediana
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="size"
                      value="large"
                    />
                    <label className="form-check-label" htmlFor="large">
                      Grande
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <h5 className="fw-bolder">¿Qué tal algo para beber? 🥤</h5>
                  <div className="d-flex">
                    <div className="d-flex flex-column me-3 text-center align-items-center">
                      <img
                        src="https://pedidosya.dhmedia.io/image/product-information-management/6749c0ee4c1f8c15d50dbb1c.jpg?webp=1&dpi=1.5"
                        alt="Coca Cola"
                        className="drink-image mb-2"
                      />
                      <input
                        className="form-check-input"
                        type="radio"
                        name="drink"
                        value="coke"
                      />
                      <label className="form-check-label" htmlFor="coke">
                        Coca-Cola
                      </label>
                    </div>
                    <div className="d-flex flex-column text-center align-items-center">
                      <img
                        src="https://pedidosya.dhmedia.io/image/product-information-management/6749c2dd4c1f8c15d50dbed1.jpg?webp=1&dpi=1.5"
                        alt="Zero"
                        className="drink-image mb-2"
                      />
                      <input
                        className="form-check-input"
                        type="radio"
                        name="drink"
                        value="zero"
                      />
                      <label className="form-check-label" htmlFor="zero">
                        Coca Cola Zero
                      </label>
                    </div>
                    <div className="ms-2 d-flex flex-column text-center align-items-center">
                      <img
                        src="https://pedidosya.dhmedia.io/image/product-information-management/676ebe73137c3d7e14204625.jpg?webp=1&dpi=1.5path/to/fanta-image.jpg"
                        alt="Fanta"
                        className="drink-image mb-2"
                      />
                      <input
                        className="form-check-input"
                        type="radio"
                        name="drink"
                        value="frute"
                      />
                      <label className="form-check-label" htmlFor="frute">
                        Salus Frute
                      </label>
                    </div>
                  </div>
                </div>
                <div className="card-footer justify-content-end d-flex">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => navigate("/")}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success fw-bold btn-wobble ms-2"
                  >
                    Listo
                  </button>
                </div>
              </form>
            )}
          </Formik>
          {/*AQUI TERMINA EL FORM */}
        </div>
      </div>
    </div>
  );
};

export default Order;
