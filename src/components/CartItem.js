import React, { useContext } from "react";
import Button from "./Button";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

const CartItem = ({ item, loaded }) => {
  const { deleteItem } = useContext(CartContext);
  function handleOnClick() {
    deleteItem(item);
  }
  return (
    <div id={item.key}>
      <div
        className={"tableDetail"}
        style={{ display: loaded !== 1 ? "flex" : "none" }}
      >
        Cargando...
      </div>
      <div
        className={"subTable tableDetail"}
        style={{ display: loaded !== 1 ? "none" : "flex" }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{ maxWidth: "10%", display: "grid", placeItems: "center" }}
          >
            <img alt={item.title} src={item.image} />
          </div>
          <div
            style={{
              paddingLeft: "2%",
              display: "grid",
              placeItems: "center",
            }}
          >
            <b>{item.name}</b>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "20%",
            fontSize: "1.5rem",
            flexFlow: "column",
            alignItems: "flex-end",
          }}
        >
          <div style={{ width: "100%", padding: "5%", textAlign: "end" }}>
            ¥{item.price} x {item.amount}
          </div>
          <div style={{ width: "100%", padding: "5%", textAlign: "end" }}>
            Total: ¥{item.price * item.amount}
          </div>
          <Link to={"/cart"}>
            <Button
              text={"Eliminar"}
              width={"6.2vw"}
              height={"2.4vw"}
              border={"none"}
              backgroundColor={"rgb(18, 0, 177)"}
              color={"white"}
              onClick={handleOnClick}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
