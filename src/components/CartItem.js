import React, {useContext} from "react";
import Button from "./Button";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom"


const CartItem = ({item, loaded}) => {
    const { deleteItem, cartLoad } = useContext(CartContext)
    function handleOnClick() {
        deleteItem(item)
    }
    return(
        <div id={item.key}>
            <div className={"tableDetail"} style={{display: loaded !== 1 ? "flex" : "none", }}>Cargando...</div>
            <div className={"subTable tableDetail"} style={{display: loaded !== 1 ? "none" : "flex", }}>
                <div style={{display: "flex"}}>
                    <div style={{width: "15%"}}><img alt={item.title} src={"https://raw.githubusercontent.com/MaxAim/tienda-gaijin-canibano/main/src/img/" + item.id + ".jpg"}/></div>
                    <div style={{width: "85%", paddingLeft: "2%", display: "grid", justifyItems: "center"}}><b>{item.name}</b><p>{item.description}</p></div>
                </div>
                <div style={{display: "grid", justifyItems: "center", width: "25%", padding: "2%"}}>
                    <div style={{width: "100%", padding: "5%"}}>¥{item.price}</div>
                    <div style={{width: "100%", padding: "5%"}}>{item.amount}x¥{item.price * item.amount}</div>
                    <Link to={"/cart/#"}><Button text={"Eliminar"} width={"8.2vw"} height={"3vw"} border={"none"} backgroundColor={"rgb(18, 0, 177)"} color={"white"} onClick={handleOnClick} /></Link>
                </div>
            </div>
        </div>
    )
}

export default CartItem

