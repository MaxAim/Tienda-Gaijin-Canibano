import React, { useEffect } from "react";
import "./ItemListContainer.css"
import ItemCount from "../ItemCount";

function ItemListContainer() {
        return (
        <div id="ItemListContainer">
            <ItemCount stock="10" />
            <ItemCount stock="0" />
            <ItemCount stock="3" />
            <ItemCount stock="6" />
            <ItemCount stock="4" />
        </div>)
}


export default ItemListContainer