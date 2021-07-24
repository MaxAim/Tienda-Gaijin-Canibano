import "./ItemDetailContainer.css";
import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
import { getFireStore } from "../../firebase";

function ItemDetailContainer() {
  const [itemDetail, setItemDetail] = useState([]);
  const { itemsId } = useParams();
  const [loaded, setLoaded] = useState(0)
  useEffect(() => {
    const db = getFireStore()
    const loadItem = db.collection("products").where("id", "==", itemsId)
    loadItem.get().then((querySnapshot) => {
      if(querySnapshot.size === 0){
        console.log("No responce")
      }
      setItemDetail(querySnapshot.docs.map(doc => doc.data())[0])
    })
    setLoaded(1)
  },[itemsId])

  return (
    <>
      <ItemDetail loaded={loaded} item={itemDetail} />
    </>
  );
}


export default ItemDetailContainer;