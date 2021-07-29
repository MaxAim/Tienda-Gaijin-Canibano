import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header className="NavBar">
        <NavLink to={"/"} style={{ padding: "0 2% 0 2%" }}>
          <h1>
            Tienda <b style={{ fontSize: "3vw", textShadow: "none"}}>⬤</b> Gaijin
          </h1>
        </NavLink>
        <NavLink to={"/"}  className={"NavLink"}>
          Todos
        </NavLink>
        <NavLink
          to={"/category/comida"}
          activeClassName={"off"}
          className={"NavLink"}
        >
          Comida
        </NavLink>
        <NavLink
          to={"/category/ropa"}
          activeClassName={"off"}
          className={"NavLink"}
        >
          Ropa
        </NavLink>
        <NavLink
          to={"/category/figuras"}
          activeClassName={"off"}
          className={"NavLink"}
        >
          Figuras
        </NavLink>
        <NavLink
          to={"/category/otros"}
          activeClassName={"off"}
          className={"NavLink"}
        >
          Otros
        </NavLink>
        <CartWidget />
      </header>
    </>
  );
};

export default NavBar;