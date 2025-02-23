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
          <div className="modal-body">
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
          <div className="modal-body">
            <h5 className="fw-bolder">¿Qué tal algo para beber? 🥤</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="drink"
                value="coke"
                checked={formData.drink === "coke"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="coke">
                Coca Cola
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="drink"
                value="sprite"
                checked={formData.drink === "sprite"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="sprite">
                Sprite
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="drink"
                value="fanta"
                checked={formData.drink === "fanta"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="fanta">
                Fanta
              </label>
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
