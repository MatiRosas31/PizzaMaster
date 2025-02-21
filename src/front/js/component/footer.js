import React, { Component } from "react";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center bg-black text-light">
    <div className="container d-flex justify-content-between">
      <p>Dirección: 14 Wall Street, New York, NY 10005</p>
      <p>Telefono: 555-222-394</p>
      <p>
        Made with <i className="fa fa-heart text-danger" /> by{" "}
        <a href="http://www.4geeksacademy.com">Matias Rosas</a>
      </p>
    </div>
  </footer>
);
