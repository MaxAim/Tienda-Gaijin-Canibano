import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <header className="NavBar">
        <div style={{ padding: "0 2% 0 2%" }}>
          <h1>
            Tienda <b style={{ fontSize: "2rem" }}>⬤</b> Gaijin
          </h1>
        </div>
        <a>Todos</a>
        <a>Comida</a>
        <a>Ropa</a>
        <a>Figuras</a>
        <a>Otros</a>
        <CartWidget />
      </header>
    </>
  );
};

export default NavBar;