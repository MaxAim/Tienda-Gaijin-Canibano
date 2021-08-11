import "./ItemListContainer.css";
import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { useHistory, useParams } from "react-router-dom";
import { getFireStore } from "../../firebase";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(0);
  const { categoryId } = useParams();
  const history = useHistory();
  
  useEffect(() => {
    const db = getFireStore();
    const loadList = db.collection("products");
    const itemCategory =
      categoryId !== undefined
        ? loadList.where("category", "==", categoryId)
        : loadList;
    itemCategory.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("No responce");
        history.push("/");
      }
      setItems(querySnapshot.docs.map((doc) => doc.data()));
      setLoaded(1);
    });
  }, [categoryId, history]);

  return (
    <>
      <ItemList loaded={loaded} items={items} />
    </>
  );
}

export default ItemListContainer;
