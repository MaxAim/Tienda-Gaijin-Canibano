import React, { useEffect } from "react";
import "./ItemListContainer.css"
import ItemCount from "../ItemCount";

function ItemListContainer() {
        return (
        <div id="ItemListContainer">
            <ItemCount stock={10} initial={0} />
            <ItemCount stock={0} initial={0} />
            <ItemCount stock={3} initial={0} />
            <ItemCount stock={6} initial={0} />
            <ItemCount stock={4} initial={0} />
        </div>)
}


export default ItemListContainer