import pizzas from "../component/pizzas.json";
import PizzaCard from "../component/PizzaCard";
import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const AllPizzas = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="all-pizzas-container vh-100">
      <div className="header-container">
        <h1 className="text-light fw-bolder">Elegí la pizza que más te guste de nuestro catálogo</h1>
      </div>
      <div className="pizza-grid">
        {pizzas.pizzas.map((pizza) => (
          <PizzaCard
            key={pizza.ID}
            title={pizza.title}
            description={pizza.description}
            thumbnail={pizza.thumbnail}
            funcion={() => actions.addToCart(pizza)}
          />
        ))}
      </div>
    </div>
  );
};

export default AllPizzas;
