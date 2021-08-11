import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cartNum } = useContext(CartContext);
  return (
    <div id="Cart">
      <Link style={{ height: "100%" }} to={"/cart"}>
        🛒{cartNum ? cartNum : ""}
      </Link>
    </div>
  );
};

export default CartWidget;