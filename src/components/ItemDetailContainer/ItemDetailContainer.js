import "./ItemDetailContainer.css";
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
import Products from "../../Products"

function ItemDetailContainer() {
  const [itemDetail, setItemDetail] = useState([]);
  const { itemsId } = useParams();
  const [loaded, setLoaded] = useState(0)
  useEffect(() => {
    const getItems = new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve(Products);
        }, 2000);
      })
      getItems.then(res => {
        const itemId = res.find(({ id }) => id === itemsId);
        itemDetail === undefined ? setItemDetail(res) : setItemDetail(itemId)
        setLoaded(1)
      },[]);
    })
  return (
    <>
      {itemDetail !== undefined ? <ItemDetail loaded={loaded} item={itemDetail} /> : <ItemList loaded={loaded} items={itemDetail} /> }
    </>
  );
}


export default ItemDetailContainer;