import React from "react";
import { Link, useParams } from "react-router-dom";
import ItemCount from "./ItemCount.js";
import Button from "./Button.js";


function Item ({item}){
    const { itemsId } = useParams()
    return(
        <div className={"subTable"}>
            <div>
                <div style={{width: "100%"}}><Link id={"pictureContainer"} to={{pathname:`/item/${item.id}`}}><img alt={item.title} src={item.image}/></Link></div>
                <div style={{width: "100%", paddingTop: "2%"}}><b>{item.title}</b></div>
            </div>
            <div style={{display: "flex", paddingTop: "10%"}}>
                {item.stock === 0  ? <p style={{fontSize: "2.3vw", width: "100%"}}>No hay stock</p> : 
                <div style={{width: "50%", padding: "7%",fontSize: "2.3vw"}}>¥{item.price}</div>}
                {itemsId === undefined ? <Link to={{pathname:`/item/${item.id}`}}><Button text={"Ver más"} width={"6vw"} height={"2.8vw"} border={"none"} backgroundColor={"rgb(18, 0, 177)"} color={"white"} /></Link> : 
                <div style={{width: "100%", padding: "5%"}}><ItemCount stock={item.stock} /></div>}
            </div>
        </div>
    )
}

export default Item

