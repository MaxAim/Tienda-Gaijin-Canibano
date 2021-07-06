import ItemCount from "./ItemCount"
import React from "react"

const ItemDetail = ({item, loaded}) => {
  return(
    <>
      <div className={"tableDetail"} style={{display: loaded !== 1 ? "flex" : "none", }}>Cargando...</div>
      <div className={"subTable tableDetail"} style={{display: loaded !== 1 ? "none" : "flex", }}>
          <div style={{display: "flex"}}>
              <div style={{width: "15%"}}><img alt={item.title} src={"https://raw.githubusercontent.com/MaxAim/tienda-gaijin-canibano/main/src/img/" + item.id + ".jpg"}/></div>
              <div style={{width: "85%", paddingLeft: "2%", display: "grid", justifyItems: "center"}}><b>{item.title}</b><p>{item.description}</p></div>
          </div>
          <div style={{display: "flex", width: "25%", padding: "2%"}}>
              <div style={{width: "100%", padding: "5%"}}><ItemCount stock={item.stock} /><div style={{width: "100%", paddingTop: "20%", paddingLeft: "15%",fontSize: "1.3vw", display: item.stock === 0  ? "none" : "inline-flex"}}>¥{item.price}</div></div>
          </div>
      </div>
   </>
)
}

export default ItemDetail