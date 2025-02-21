import React from "react";
import pizzas from "../component/pizzas.json";
import PizzaCard from "../component/PizzaCard";

const AllPizzas = () => {
  return (
    <>
      <div>
        <h1 className="">Estas son todas las pizzas</h1>
      </div>
      <div className="pizza-grid">
        {pizzas.pizzas.map((pizza) => (
          <PizzaCard
            key={pizza.ID}
            title={pizza.title}
            description={pizza.description}
            thumbnail={pizza.thumbnail}
          />
        ))}
      </div>
    </>
  );
};

export default AllPizzas;
