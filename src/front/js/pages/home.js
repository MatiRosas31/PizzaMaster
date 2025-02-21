import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import SearchResults from "../component/SearchResults";
import OrderModal from "../component/OrderModal";

export const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const { store, actions } = useContext(Context);

  const clearSearch = () => {
    setSearchValue("");
  };

  const ClearClick = () => {
    console.log("Evento DoubleClick");
    clearSearch();
  };

  /* 
  Agregar un modal cuando se presiona hacer orden que tira un form para ingresar nombre, dirección y teléfono y datos de la orden
  
  */

  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <div id="TitleSubtitlegroup" className="container text-center mb-4">
          <h1 className="display-1 text-light fw-bolder">
            ¡Bienvenido a la Pizzería!
          </h1>
          <p className="lead text-light">
            Utiliza la barra de búsqueda para añadir los ingredientes que desees
            y personaliza tu pizza completamente a tu gusto. Selecciona entre
            una variedad de opciones para crear una pizza única y deliciosa,
            hecha especialmente para ti
          </p>
        </div>
        <div
          id="SearchbarBtnsContainer"
          className="container text-center"
          onDoubleClick={ClearClick}
        >
          {store.selectedIngredients.length > 0 ? (
            <h5 className="text-light fw-bolder">
              Ingredientes seleccionados:
            </h5>
          ) : null}
          {store.selectedIngredients.length > 0
            ? store.selectedIngredients.map((ingredient, index) => (
                <span key={index} className="badge orangebtn me-2 mb-2">
                  {ingredient}
                  <button
                    className="btn-close ms-1"
                    onClick={() => actions.removeIngredient(ingredient)}
                  ></button>
                </span>
              ))
            : null}
          <div className="search-container mx-auto">
            <div className="input-group mb-3">
              <input
                type="text"
                placeholder="Agrega tus ingredientes..."
                className="form-control mb-1"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-dark" onClick={clearSearch}>
                  Clear
                </button>
              </div>
            </div>
            {searchValue ? <SearchResults searchValue={searchValue} /> : null}
          </div>
          <div className="justify-content-evenly">
            <button
              className="btn btn-danger me-1"
              onClick={() => actions.removeAllIngredients()}
            >
              Cancelar
            </button>
            <button
              className="btn btn-success ms-1"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Ordenar
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <OrderModal />
    </div>
  );
};
