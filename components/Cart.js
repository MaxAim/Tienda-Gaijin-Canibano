import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import CartContext from "../context/CartContext"
import CartItem from "./CartItem";
import Button from "./Button";
import { getFireStore } from "../firebase";
import * as firebase from "firebase/app"
import "firebase/firestore"
import Formulary from "../containers/Formulary/Formulary";



function Cart() {
    const db = getFireStore();
    const { cart, cartLoad, totalPrice, cartNum, setCart } = useContext(CartContext);
    const [loaded, setLoaded] = useState(0)
    const [items, setItems] = useState([]);
    const [orderId, setOrderId] = useState(null)
    const history = useHistory();
    const orders = db.collection("orders")
    const [userInfo, setUserInfo] = useState({
        name: "",
        adress: "",
        email: "",
        phone: "",
        extra: "",
    })
    const newOrder = {
        buyer: userInfo,
        items: cart,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: totalPrice(),
    };
    const goBack = () => {
            history.push("/");
    }
    const completeOrder = () => {   
        orders.add(newOrder).then(({id}) => {
            setOrderId(id)
            console.log(orderId)
        }).catch(err => {
            console.log(err);
        })
        setCart([])
        setTimeout(() => {
            goBack()
        }, 1);
    }
    
    useEffect(() => {
        setItems(cart)
        setLoaded(1)
    },[cart])
    cartLoad()

    return(
        <div>
            {
            cartNum === 0 ?
            <div>
                <div className={"tableDark"}>
                    <div style={{width: "100%", minHeight: "500px", display: "grid"}}>
                        <div style={{position: "absolute", alignSelf: "center", zIndex: "2", height: "40px", justifySelf: "center"}}>
                            <Button border={"none"} backgroundColor={"rgb(18, 0, 177)"} color={"white"} text={"Seguir comprando"} onClick={goBack} height={"50px"} width={"150px"} />
                            <Button border={"none"} backgroundColor={"rgb(177, 0, 18)"} color={"white"} text={"Seguir comprando pero en rojo"} onClick={goBack} height={"auto"} width={"150px"} margin={"0px 0px 0px 135px"} />
                        </div>
                        <img style={{width: "500px", height: "100px", justifySelf: "center", paddingRight:"250px"}} src={"https://raw.githubusercontent.com/MaxAim/tienda-gaijin-canibano/main/src/img/vacio.png"} alt={"Carrito vacio"} />
                        <img style={{maxHeight: "400px", maxWidth: "400px", justifySelf: "center"}} src={"https://raw.githubusercontent.com/MaxAim/tienda-gaijin-canibano/main/src/img/nada.png"} alt={"Carrito vacio"} />
                    </div>
                </div>
            </div>
            :
            <div>
                {items.map((item) => (<CartItem item={item} loaded={loaded} key={item.key} />))}
                <div style={{display: "flex", justifyContent: "end"}}>
                    <div className={"tableDark"} id={"totalCost"}>
                        <div style={{marginRight: "5%"}}>Total:</div>
                        <div>¥{totalPrice()}</div>
                    </div>
                </div>
                <Formulary completeOrder={completeOrder} setUserInfo={setUserInfo} userInfo={userInfo} />
            </div>
            }
        </div>
    )
  
}


export default Cart;