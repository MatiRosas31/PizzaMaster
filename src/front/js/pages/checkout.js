import React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/order.css"; // Asegúrate de importar el archivo CSS
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Checkout = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div
      id="wholeContainerOrder"
      className="container my-5 d-flex justify-content-center align-items-center vh-100"
    >
      <div className="card bg-white">
        <div className="card-header">
          <h1 className="card-title fs-5">
            <strong>Entonces, veamos...🤔</strong> Tu orden sería:
          </h1>
        </div>
        {store.selectedIngredients.length > 0 ? (
          <>
            <div className="card-body pb-1 px-1">
              <div className="card-text">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="fw-bold">Tu nombre:</span>{" "}
                    {store.PizzaOrder.name
                      ? store.PizzaOrder.name
                      : "Cargando..."}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="fw-bold">Enviaremos tu pizza a... :</span>{" "}
                    {store.PizzaOrder.address
                      ? store.PizzaOrder.address
                      : "Cargando..."}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="fw-bold">
                      Te contactaremos cuando este lista a tu numero... :
                    </span>{" "}
                    {store.PizzaOrder.phone
                      ? store.PizzaOrder.phone
                      : "Cargando..."}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="fw-bold">Tamaño de la pizza:</span>{" "}
                    {store.PizzaOrder.size
                      ? store.PizzaOrder.size
                      : "Cargando..."}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="fw-bold">Ingredientes:</span>{" "}
                    {store.selectedIngredients.map((ingredient, index) => (
                      <span key={index} className="badge bg-dark me-1">
                        {ingredient}
                        <button
                          className="btn-close text-light ms-1"
                          onClick={() => actions.removeIngredient(ingredient)}
                        >
                          X
                        </button>
                      </span>
                    )) || "Cargando..."}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="fw-bold">Precio:</span>{" "}
                    {store.PizzaOrder.price
                      ? `$${store.PizzaOrder.price}`
                      : "Cargando..."}
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : null}
        <div className="card-body pb-1 px-1">
          <div className="card-text">
            {store.ShoppingCart.length > 0 ? (
              <h2 className="card-title fs-5 ms-1">
                <strong>Tus Pizzas Seleccionadas: </strong>
              </h2>
            ) : null}{" "}
            <ul className="list-group">
              {store.ShoppingCart.length > 0
                ? store.ShoppingCart.map((item, index) => (
                    <li
                      key={index}
                      className="dropdown-item d-flex justify-content-between"
                    >
                      <span className="fw-bold mt-2">{item[0].title}</span>
                      <div>
                        <button className="btn btn-dark mx-1 fw-bolder">
                          x{item.length}
                        </button>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => actions.removeFromCart(item[0].ID)}
                        >
                          X
                        </button>
                      </div>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
        {!store.PizzaOrder.drink ? (
          <>
            <Formik
              initialValues={{
                drink: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.drink) {
                  errors.drink = "Por favor, selecciona una bebida";
                }
                return errors;
              }}
              onSubmit={(values) => {
                actions.addDrink(values.drink);
              }}
            >
              {({ errors }) => (
                <Form>
                  <div className="mb-3">
                    <h5 className="fw-bolder">¿Qué tal algo para beber? 🥤</h5>
                    <div className="d-flex">
                      <div className="d-flex flex-column me-3 text-center align-items-center">
                        <img
                          src="https://pedidosya.dhmedia.io/image/product-information-management/6749c0ee4c1f8c15d50dbb1c.jpg?webp=1&dpi=1.5"
                          alt="Coca Cola"
                          className="drink-image mb-2"
                        />
                        <Field
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
                        <Field
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
                        <Field
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
                  <ErrorMessage
                    name="drink"
                    component={() => (
                      <p className="text-danger fw-bold">{errors.drink}</p>
                    )}
                  />
                </Form>
              )}
            </Formik>
          </>
        ) : null}
        <div className="card-footer d-flex justify-content-between">
          <button className="btn btn-danger" onClick={() => navigate("/")}>
            Volver
          </button>
          <button
            className="btn btn-success"
            onClick={() => actions.goToPayment()}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
