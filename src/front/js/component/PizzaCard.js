import React from "react";

const PizzaCard = ({ title, description, thumbnail, funcion }) => {
  return (
    <div className="pizza-card">
      <img src={thumbnail} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title text-dark fw-bold">{title}</h5>
          <p className="card-text text-dark">{description}</p>
        </div>
        <button
          href="#"
          className="btn btn-success align-self-start mt-1"
          onClick={funcion}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
