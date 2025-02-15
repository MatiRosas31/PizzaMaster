import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import pizzaBackground from "../../img/pizza-background.jpg"; 
import "../../styles/home.css";


/* 



*/



export const Home = () => {
    return (
        <div>
        <div className="d-flex flex-column  justify-content-center align-items-center vh-100">
            <div id="TitleSubtitlegroup" className="container text-center mb-4">
                <h1 className="display-1 text-light fw-bolder">¡Bienvenido a la Pizzería!</h1>
                <p className="lead text-light">Utiliza la barra de búsqueda para añadir los ingredientes que desees y personaliza tu pizza completamente a tu gusto. Selecciona entre una variedad de opciones para crear una pizza única y deliciosa, hecha especialmente para ti</p>
                </div>
            <div className="container text-center">
                <input type="text" placeholder="Agrega tus ingredientes..." className="form-control mb-3 search-bar mx-auto" />
                <div className="justify-content-evenly">
                    <button className="btn btn-danger me-1">Cancelar</button>
                    <button className="btn btn-success ms-1">Ordenar</button>
                </div>
            </div>
        </div>
        </div>
    );
};

