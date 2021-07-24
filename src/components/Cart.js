import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import CartContext from "../context/CartContext"
import CartItem from "./CartItem";
import Button from "./Button";


function Cart() {
    const { cart, cartLoad, totalPrice, cartNum } = useContext(CartContext);
    const [loaded, setLoaded] = useState(0)
    const [items, setItems] = useState([]);
    const history = useHistory();
    const handleClick = () => {
            history.push("/");
    }
    useEffect(() => {
        setItems(cart)
        setLoaded(1)
    },[])
    cartLoad()
    return(
        <div>
            {
            cartNum === 0 ?
            <div>
                <div className={"tableDark"}><div style={{position: "absolute", alignSelf: "center", left: "38%", zIndex: "2", paddingTop: "4%" }}><Button border={"none"} backgroundColor={"rgb(18, 0, 177)"} color={"white"} text={"Seguir comprando"} onClick={handleClick} height={"50px"} width={"150px"} /></div>
                <div style={{position: "absolute", alignSelf: "center", left: "65%", zIndex: "2", paddingTop: "1%" }}><Button border={"none"} backgroundColor={"rgb(177, 0, 18)"} color={"white"} text={"Seguir comprando pero en rojo"} onClick={handleClick} height={"50px"} width={"150px"} /></div>
                <img style={{width: "50%", height: "50%", position: "relative", left: "15%"}} src={"https://raw.githubusercontent.com/MaxAim/tienda-gaijin-canibano/main/src/img/vacio.png"} />
                <img style={{maxHeight: "400px", maxWidth: "400px", justifySelf: "center", position: "relative", left: "-10%", paddingTop: "7%"}} src={"https://raw.githubusercontent.com/MaxAim/tienda-gaijin-canibano/main/src/img/nada.png"} /></div>
            </div>
            :
            <>
            {items.map((item) => (<CartItem item={item} loaded={loaded} key={item.key} />))}
            <div className={"tableDark"} style={{justifyContent: "end"}}><div style={{marginRight: "5%"}}>Total:</div><div>¥{totalPrice()}</div></div>
            </>
            }
        </div>
    )
  
}


export default Cart;