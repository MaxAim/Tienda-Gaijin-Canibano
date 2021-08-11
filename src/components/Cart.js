import React, { useEffect, useState, useContext } from "react";
import CartContext from "../context/CartContext";
import CartItem from "./CartItem";
import Button from "./Button";
import { getFireStore } from "../firebase";
import * as firebase from "firebase/app";
import "firebase/firestore";
import Formulary from "../containers/Formulary/Formulary";
import { useHistory } from "react-router";
import PopUp from "../containers/Modal/Modal";

function Cart() {
  const db = getFireStore();
  const { cart, totalPrice, setCart, handleShow, setErrorText } =
    useContext(CartContext);
  const [loaded, setLoaded] = useState(0);
  const history = useHistory();
  const [orderId, setOrderId] = useState(null);
  const [display, setDisplay] = useState(0);
  const orders = db.collection("orders");
  const [userInfo, setUserInfo] = useState({
    name: "",
    adress: "",
    email: "",
    phone: "",
    extra: "",
  });
  const newOrder = {
    buyer: userInfo,
    items: cart,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    total: totalPrice(),
  };
  const completeOrder = () => {
    orders
      .add(newOrder)
      .then(({ id }) => {
        setOrderId(id);
        setErrorText(
          "Gracias " +
            userInfo.name +
            " por tu compra. El id de tu orden es " +
            id
        );
        handleShow();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const cleanCart = () => {
    if (orderId !== null) {
      setCart([]);
      history.push("/");
    }
  };

  useEffect(() => {
    setLoaded(1);
  }, [cart]);

  const handleOnclick = () => {
    setDisplay(1);
  };

  return (
    <div>
      {!Object.keys(cart).length ? (
        <div>
          <div className={"tableDark"}>
            <div style={{ width: "100%", minHeight: "500px", display: "grid" }}>
              <div
                style={{
                  position: "absolute",
                  justifyContent: "center",
                  zIndex: "2",
                  width: "100%",
                  alignItems: "center",
                  height: "500px",
                  display: "flex",
                }}
              >
                <Button
                  border={"none"}
                  backgroundColor={"rgb(18, 0, 177)"}
                  color={"white"}
                  text={"Seguir comprando"}
                  onClick={() => history.push("/")}
                  height={"50px"}
                  width={"150px"}
                />
                <Button
                  border={"none"}
                  backgroundColor={"rgb(177, 0, 18)"}
                  color={"white"}
                  text={"Seguir comprando pero en rojo"}
                  onClick={() => history.push("/")}
                  height={"auto"}
                  width={"150px"}
                  margin={"0px 50px 50px 170px"}
                />
              </div>
              <img
                style={{
                  width: "500px",
                  height: "100px",
                  justifySelf: "center",
                  paddingRight: "250px",
                }}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/tienda-gaijin.appspot.com/o/vacio.png?alt=media&token=c0fc45e4-6924-48f8-ab8f-58f843464b5c"
                }
                alt={"Carrito vacio"}
              />
              <img
                style={{
                  maxHeight: "400px",
                  maxWidth: "400px",
                  justifySelf: "center",
                }}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/tienda-gaijin.appspot.com/o/nada.png?alt=media&token=2304c6fa-6c8c-4764-be74-1a9e983d9671"
                }
                alt={"Carrito vacio"}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div style={{ display: display === 0 ? "block" : "none" }}>
            <PopUp cleanCart={cleanCart} />
            {cart.map((item) => (
              <CartItem item={item} loaded={loaded} key={item.key} />
            ))}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div className={"tableDark"} id={"totalCost"}>
                <div style={{ marginRight: "5%" }}>Total:</div>
                <div>¥{totalPrice()}</div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className={"tableDark"} style={{ width: "20%" }}>
                <Button
                  border={"none"}
                  backgroundColor={"rgb(18, 0, 177)"}
                  color={"white"}
                  text={"Confirmar pedido"}
                  onClick={handleOnclick}
                  height={"50px"}
                  width={"100%"}
                />
              </div>
            </div>
          </div>
          <Formulary
            completeOrder={completeOrder}
            setUserInfo={setUserInfo}
            userInfo={userInfo}
            display={display}
          />
        </div>
      )}
    </div>
  );
}

export default Cart;
