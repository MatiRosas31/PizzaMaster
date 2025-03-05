import React from "react";

const PizzaCard = ({ title, description, thumbnail, funcion, counter }) => {
  return (
    <div className="pizza-card">
      <img src={thumbnail} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title text-dark fw-bold">{title}</h5>
          <p className="card-text text-dark">{description}</p>
        </div>
        <div className="mt-1">
          <button
            className="btn btn-success align-self-start"
            onClick={funcion}
          >
            Order Now
          </button>
          <button className="ms-1 btn btn-dark  fw-bolder">x {counter}</button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
