import pizzas from "../component/pizzas.json";
import PizzaCard from "../component/PizzaCard";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

const AllPizzas = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="all-pizzas-container vh-100">
      <div className="header-container">
        <h1 className="text-light fw-bolder">
          Elegí la pizza que más te guste de nuestro catálogo
        </h1>
      </div>
      <div className="container">
        <div className="row">
          {pizzas.pizzas.map((pizza) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={pizza.ID}>
              <PizzaCard
                title={pizza.title}
                description={pizza.description}
                thumbnail={pizza.thumbnail}
                funcion={() => actions.addToCart(pizza)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPizzas;
