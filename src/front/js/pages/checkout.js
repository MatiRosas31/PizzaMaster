import React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/order.css"; // Asegúrate de importar el archivo CSS
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomPizzaOrderForm from "../component/customPizzaOrderForm";

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
        {/* Custom pizza order form: si se han seleccionado ingredientes */}
        {store.selectedIngredients.length > 0 ? (
          <CustomPizzaOrderForm
            StorePizzaOrderName={store.PizzaOrder.name}
            StorePizzaOrderAddress={store.PizzaOrder.address}
            StorePizzaOrderPhone={store.PizzaOrder.phone}
            StorePizzaOrderSize={store.PizzaOrder.size}
            StoreSelectedIngredientes={store.PizzaOrder.ingredients}
            RemoveIngredientsFunction={actions.removeIngredient}
            StorePizzaOrderPrize={store.selectedIngredients.length > 3 ? 10 : 7}
          />
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
        {/* Drink selection: si no se ha seleccionado ninguna drink */}
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
        {/* Payment aca deberia haber un form con formulario para pagar: addres,phone,etc. y $total (usar function del navbar)*/}
        <div className="card-footer d-flex justify-content-between">
          <button className="btn btn-danger" onClick={() => navigate("/")}>
            Volver
          </button>
          <button className="btn btn-success">Continuar</button>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
