import React from "react";

const PizzaCard = ({
  title,
  description,
  thumbnail,
  price,
  funcion,
  counter,
}) => {
  return (
    <div className="pizza-card">
      <img src={thumbnail} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title text-dark fw-bold">{title}</h5>
          <p className="card-text text-dark">{description}</p>
        </div>
        <div className="mt-1 d-flex justify-content-between align-items-center">
          <span className="custombadge orangebtn">${price}</span>
          <div>
            <button className="btn btn-success" onClick={funcion}>
              Order Now
            </button>
            <button className="ms-1 btn btn-dark  fw-bolder">
              x {counter}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
