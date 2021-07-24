import Item from "../Item"
import React from "react"
import "./ItemList.css"

const ItemList = ({items, loaded}) => {
  return(
      <>
        <div className={"tableDark"}>
          <div style={{display: loaded !== 1 ? "flex" : "none", }}>Cargando...</div>
          {items.map((item) => (<Item key={item.id} item={item} />))}
        </div>
     </>
  )
}

export default ItemList