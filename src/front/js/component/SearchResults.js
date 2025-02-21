import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

const SearchResults = ({ searchValue }) => {
  const { store, actions } = useContext(Context);
  const { ingredients } = store;

  console.log(ingredients);
  return (
    <div className="mx-auto mb-2">
      <ul className="list-group">
        {ingredients
          .filter((ingredient) =>
            ingredient.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((ingredient, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center white-bg-color-opacity-faded"
            >
              <span>{ingredient}</span>
              <button
                className="btn btn-primary ms-2"
                onClick={() => actions.addIngredient(ingredient)}
              >
                Add
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchResults;
