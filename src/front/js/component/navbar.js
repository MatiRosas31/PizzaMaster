import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar bg-black text-light my-auto">
      <div className="container">
        <Link to="/">
          <img
            src="https://i.postimg.cc/Y01NWKtJ/logo-for-a-pizza-website-with-green-red-yellow-and-black-colors.jpg"
            alt="Logo"
            className="navbar-logo"
          />
        </Link>
        <div className="ml-auto d-flex align-items-center">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Shopping Cart ({store.ShoppingCart.length})
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              {store.ShoppingCart.length > 0 ? (
                store.ShoppingCart.map((item, index) => (
                  <li
                    key={index}
                    className="dropdown-item d-flex justify-content-between"
                  >
                    <span className="fw-bold mt-2">{item.title}</span>
                    <div>
                      <button className="btn btn-dark mx-1 fw-bolder">
                        x{item.quantity}
                      </button>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => actions.removeFromCart(item.ID)}
                      >
                        X
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <li className="dropdown-item">No items in cart</li>
              )}
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="dropdown-item d-flex justify-content-between">
                <span className="fw-bold">
                  Total: $
                  {store.ShoppingCart.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )}
                </span>
                <Link
                  to={
                    store.ShoppingCart.length < 1 ? `/allpizzas` : `/checkout`
                  }
                  className="btn btn-danger ms-1 btn-sm btn-pulse"
                >
                  Order
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
