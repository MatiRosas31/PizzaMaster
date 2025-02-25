import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const OrderModal = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    size: "",
    drink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.setPizzaOrder(formData);
    alert("Perfecto ya has creado tu orden satisfactoriamente");
    navigate("/order");
  };

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
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  placeholder="Fulanito de Tal"
                />
                <label htmlFor="address" className="form-label fw-bolder">
                  Dirección:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={formData.address || ""}
                  onChange={handleChange}
                  placeholder="Fake Address 1234"
                />
                <label htmlFor="phone" className="form-label fw-bolder">
                  Teléfono:
                </label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={formData.phone || ""}
                  onChange={handleChange}
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
          <div id="PizzaSize" className="modal-body">
            <h5 className="fw-bolder">Tamaño de la pizza 📏</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="size"
                value="small"
                checked={formData.size === "small"}
                onChange={handleChange}
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
                checked={formData.size === "medium"}
                onChange={handleChange}
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
                checked={formData.size === "large"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="large">
                Grande
              </label>
            </div>
          </div>
          <div id="Drinks" className="modal-body">
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
                  checked={formData.drink === "coke"}
                  onChange={handleChange}
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
                  checked={formData.drink === "zero"}
                  onChange={handleChange}
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
                  checked={formData.drink === "frute"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="frute">
                  Salus Frute
                </label>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-success fw-bold btn-wobble"
              onClick={handleSubmit}
            >
              Listo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
