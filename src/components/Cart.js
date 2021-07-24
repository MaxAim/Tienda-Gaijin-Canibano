import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import CartContext from "../context/CartContext"
import CartItem from "./CartItem";


function Cart() {
    const { cart, cartLoad, totalPrice, cartNum } = useContext(CartContext);
    const [loaded, setLoaded] = useState(0)
    const [items, setItems] = useState([]);
    const history = useHistory();
    const handleLoad = () => {
        setTimeout(() => {
            history.push("/");
        }, 5000);
    }
    useEffect(() => {
        const getCart = new Promise((resolve, reject) => {
            setTimeout(function() {
                resolve(cart);
            }, 2);
        })
        getCart.then(res => {
            setLoaded(1)
            setItems(cart)
        })
    },[])
    cartLoad()
    return(
        <div>
            {
            cartNum === 0 ?
            <div className={"tableDark"} onLoad={handleLoad} ><img style={{width: "50%", height: "50%", position: "relative", left: "15%"}} src={"https://raw.githubusercontent.com/MaxAim/tienda-gaijin-canibano/main/src/img/vacio.png"} /><img style={{maxHeight: "400px", maxWidth: "400px", justifySelf: "center", position: "relative", left: "-10%", paddingTop: "7%"}} src={"https://raw.githubusercontent.com/MaxAim/tienda-gaijin-canibano/main/src/img/nada.png"} /></div>
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