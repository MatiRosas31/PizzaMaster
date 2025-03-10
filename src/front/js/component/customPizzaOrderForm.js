import React from "react";
const CustomPizzaOrderForm = ({
  StorePizzaOrderName,
  StorePizzaOrderAddress,
  StorePizzaOrderPhone,
  StorePizzaOrderSize,
  StorePizzaOrderDrink,
  StoreSelectedIngredientes,
  RemoveIngredientsFunction,
  StorePizzaOrderPrize,
}) => {
  return (
    <div className="card-body pb-1 px-1">
      <div className="card-text">
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="fw-bold">Tu nombre:</span>{" "}
            {StorePizzaOrderName ? StorePizzaOrderName : "Cargando..."}
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="fw-bold">Enviaremos tu pizza a :</span>{" "}
            {StorePizzaOrderAddress ? StorePizzaOrderAddress : "Cargando..."}
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="fw-bold">
              Te contactaremos cuando este lista a tu numero... :
            </span>{" "}
            {StorePizzaOrderPhone ? StorePizzaOrderPhone : "Cargando..."}
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="fw-bold">Tamaño de la pizza:</span>{" "}
            {StorePizzaOrderSize ? StorePizzaOrderSize : "Cargando..."}
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="fw-bold">Bebida:</span>{" "}
            {StorePizzaOrderDrink ? StorePizzaOrderDrink : "Cargando..."}
          </li>
          <li className="list-group-item  justify-content-between align-items-center">
            <span className="fw-bold">Ingredientes:</span>{" "}
            {StoreSelectedIngredientes && StoreSelectedIngredientes.length > 0
              ? StoreSelectedIngredientes.map((ingredient, index) => (
                  <span key={index} className="badge bg-dark me-1 mt-1">
                    {ingredient}
                    <button
                      className="btn-close text-light ms-1"
                      onClick={() => RemoveIngredientsFunction(ingredient)}
                    >
                      X
                    </button>
                  </span>
                ))
              : "Cargando..."}
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="fw-bold">Precio:</span>{" "}
            {StorePizzaOrderPrize ? `$${StorePizzaOrderPrize}` : "Cargando..."}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomPizzaOrderForm;
