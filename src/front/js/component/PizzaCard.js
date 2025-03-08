import React from "react";

const PizzaCard = ({
  title,
  description,
  thumbnail,
  price,
  funcion,
  counter,
  ingredients,
}) => {
  return (
    <div className="pizza-card">
      <img src={thumbnail} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between">
          <h5 className="card-title text-dark fw-bold">{title}</h5>
          <div id="DROPDOWN" className="dropdown">
            <button
              className="btn btn-light btn-sm dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="dropdown-item">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="card-text text-dark">{description}</p>
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
