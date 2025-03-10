import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const AlgoParaBeber = () => {
  return (
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
            <div className="mb-3 mx-1">
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
  );
};

export default AlgoParaBeber;
