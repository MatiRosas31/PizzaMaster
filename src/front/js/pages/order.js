import React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/order.css"; // Asegúrate de importar el archivo CSS
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

/*Tareas 
1) Agregar componentes Field para los radios 
2) Agregar validaciones para los ingredientes seleccionados
3) Agregar validaciones para el tamaño de la pizza
4) Agregar validaciones para la bebida
5) Que se agregen los selected ingredients al store.PizzaOrder
6) Agregar tamaño de la pizza y bebida al store.PizzaOrder
7) En checkout se va a mostrar o la pizza con los ingredientes seleccionados O la(s) pizzas hechas
8) No hay posibilidad de hacer una orden de una pizza seleccionada con un tamaño y bebida (falta agregar)
*/

const Order = () => {
  const { actions, store } = useContext(Context);
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
            onSubmit={(values, { resetForm }) => {
              console.log("Aqui estan los datos del formulario", values);
              resetForm();
              // actions.setPizzaOrder(values);
              // navigate("/checkout");
            }}
            validate={(values) => {
              let errors = {};

              if (!values.name) {
                errors.name = "Por favor ingresa tu nombre";
              }

              if (!values.address) {
                errors.address = "Por favor ingresa tu dirección";
              }

              if (!values.phone) {
                errors.phone = "Por favor ingresa tu número de teléfono";
              } else if (!/^\d+$/.test(values.phone)) {
                errors.phone = "Por favor ingresa un número de teléfono válido";
              }

              // if (!values.size) {
              //   errors.size = "Por favor selecciona el tamaño de tu pizza";
              // }

              // if (!values.drink) {
              //   errors.drink = "Por favor selecciona una bebida";
              // }

              return errors;
            }}
            initialValues={{
              name: "",
              address: "",
              phone: "",
              size: "",
              drink: "",
            }}
          >
            {({ errors, touched, values, handleChange, handleBlur }) => (
              <Form>
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
                    onBlur={handleBlur}
                  />
                  {touched.name && errors.name && (
                    <p className="text-danger fw-bold">{errors.name}</p>
                  )}
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
                    onBlur={handleBlur}
                  />
                  {touched.address && errors.address && (
                    <p className="text-danger fw-bold">{errors.address}</p>
                  )}
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
                    onBlur={handleBlur}
                    value={values.phone}
                    onChange={handleChange}
                  />
                  {touched.phone && errors.phone && (
                    <p className="text-danger fw-bold">{errors.phone}</p>
                  )}
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
              </Form>
            )}
          </Formik>
          {/*AQUI TERMINA EL FORM */}
        </div>
      </div>
    </div>
  );
};

export default Order;
