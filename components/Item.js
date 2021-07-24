import ItemCount from "./ItemCount.js";
import React from "react";
import { Link } from "react-router-dom";


function Item ({item}){
    return(
        <div className={"subTable"}>
            <div>
                <div style={{width: "100%"}}><Link item={item} to={{pathname:`/item/${item.id}`, state: {modal: true}}}><img alt={item.title} src={"https://raw.githubusercontent.com/MaxAim/Tienda-Gaijin-Canibano/main/src/img/" + item.id + ".jpg"}/></Link></div>
                <div style={{width: "100%", paddingTop: "2%"}}><b>{item.title}</b></div>
            </div>
            <div style={{display: "flex", paddingTop: "10%"}}>
                <div style={{width: "100%", padding: "7%",fontSize: "1.3vw", display: item.stock === 0  ? "none" : "inline-flex"}}>¥{item.price}</div>
                <div style={{width: "100%", padding: "5%"}}><ItemCount stock={item.stock} /></div>
            </div>
        </div>
    )
}

export default Item

