import React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/order.css"; // Asegúrate de importar el archivo CSS

const Order = () => {
  const { actions } = useContext(Context);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    card: "",
    promoCode: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.setPizzaOrder(formData);
    alert("Perfecto ya has creado tu orden satisfactoriamente");
    // Puedes agregar lógica adicional aquí, como redirigir al usuario o mostrar un mensaje de éxito
  };
  return (
    <div className="container my-5 justify-content-center">
      <div className="card cart">
        <label className="ms-3 mt-2 modal-title fs-3 text-light fw-bolder">
          Entonces tu orden sería...🤔
        </label>
        <div className="steps">
          <div className="step">
            <div>
              <label htmlFor="address" className="form-label fs-5 text-light">
                Dirección de Envío 🛵
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="221B Baker Street, W1U 8ED, London, United Kingdom"
                required
              />
            </div>
            <hr />
            <div>
              <label htmlFor="card" className="form-label fs-5 text-light">
                Metodo de Pago 💳
              </label>
              <input
                type="text"
                className="form-control"
                id="card"
                value={formData.card}
                placeholder="**** **** **** 4243"
                onChange={handleChange}
                required
              />
            </div>
            <hr />
            <div className="promo">
              <label htmlFor="promoCode" className="form-label fs-5 text-light">
                HAVE A PROMO CODE?
              </label>
              <form className="form">
                <input
                  className="form-control"
                  placeholder="Enter a Promo Code"
                  value={formData.promoCode}
                  id="promoCode"
                  onChange={handleChange}
                  required
                  type="text"
                />
                <button>Apply</button>
              </form>
            </div>
            <hr />
            <div className="payments">
              <span>PAYMENT</span>
              <div className="details">
                <span>Subtotal:</span>
                <span>$240.00</span>
                <span>Shipping:</span>
                <span>$10.00</span>
                <span>Tax:</span>
                <span>$30.40</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card checkout">
        <div className="footer">
          <label className="price">$280.40</label>
          <button className="checkout-btn fw-bolder" onClick={handleSubmit}>
            Confirmar Orden
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
