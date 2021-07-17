import "./ItemListContainer.css";
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Products from "../../Products";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(0)
  useEffect(() => {
    const loadList = new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve(Products);
      }, 2000);
    })
    loadList.then(res => {
        setItems(res);
        setLoaded(1)
      });
    },[])
  const { categoryId } = useParams();
  const itemsCategory = items.filter(item => item.category === categoryId)   
  return (
    <>
      {categoryId === undefined ? <ItemList loaded={loaded} items={items} /> : <ItemList loaded={loaded} items={itemsCategory} />}
    </>
  );
}

export default ItemListContainer;