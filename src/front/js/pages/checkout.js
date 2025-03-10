import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/order.css"; // Asegúrate de importar el archivo CSS
import { useNavigate } from "react-router-dom";
import AlgoParaBeber from "../component/algoParaBeber";
import CustomPizzaOrderForm from "../component/customPizzaOrderForm";
import CreditPaymentCompo from "../component/creditPaymentCompo";

const Checkout = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.ShoppingCartPriceTotalCalc();
  }, [store.ShoppingCart]);

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
            StorePizzaOrderDrink={store.PizzaOrder.drink}
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
                      <span className="fw-bold mt-2">{item.title}</span>
                      <div>
                        <button className="btn btn-dark mx-1 fw-bolder">
                          x{item.quantity}
                        </button>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => actions.removeFromCart(item.ID)}
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
        {!store.PizzaOrder.drink ? <AlgoParaBeber></AlgoParaBeber> : null}
        {/* Payment aca deberia haber un form con formulario para pagar: addres,phone,etc. y $total (usar function del navbar)*/}
        <div className="card-body pb-1 px-1">
          <div className="card-text">
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span className="fw-bold">Total:</span> $
                {store.ShoppingCartPriceTotal
                  ? store.ShoppingCartPriceTotal
                  : "..."}
              </li>
            </ul>
          </div>
        </div>
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
