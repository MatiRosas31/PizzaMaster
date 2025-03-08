import pizzas from "../component/pizzas.json";
import PizzaCard from "../component/PizzaCard";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/allpizzas.css"; // Asegúrate de importar el archivo CSS

const AllPizzas = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="all-pizzas-container">
      <div className="header-container">
        <h1 className="page-title">
          Elegí la pizza que más te guste de nuestro catálogo
        </h1>
      </div>
      <div className="pizza-grid">
        {pizzas.pizzas.map((pizza) => (
          <div className="pizza-card" key={pizza.ID}>
            <PizzaCard
              title={pizza.title}
              description={pizza.description}
              thumbnail={pizza.thumbnail}
              ingredients={pizza.ingredients}
              price={pizza.price}
              funcion={() => actions.addToCart(pizza)}
              counter={
                store.ShoppingCart.filter((item) => item[0].ID === pizza.ID)
                  .length
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPizzas;
