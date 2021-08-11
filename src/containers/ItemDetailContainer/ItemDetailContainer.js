import "./ItemDetailContainer.css";
import React, { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail";
import { useHistory, useParams } from "react-router-dom";
import { getFireStore } from "../../firebase";

function ItemDetailContainer() {
  const [itemDetail, setItemDetail] = useState([]);
  const { itemsId } = useParams();
  const history = useHistory();
  const [loaded, setLoaded] = useState(0);
  useEffect(() => {
    const db = getFireStore();
    const loadItem = db.collection("products").where("id", "==", itemsId);
    loadItem.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("No responce");
        history.push("/");
      }
      setItemDetail(querySnapshot.docs.map((doc) => doc.data())[0]);
      setLoaded(1);
    });
  }, [itemsId, history]);

  return (
    <>
      <ItemDetail loaded={loaded} item={itemDetail} />
    </>
  );
}

export default ItemDetailContainer;
