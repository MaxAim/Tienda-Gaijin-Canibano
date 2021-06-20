import Button from "./Button";
import React, {useState} from "react"


function ItemCount({stock}){
    const [num, setNum] = useState(0);
    
    return (
    <div style={{width: "100px"}}>
        <Button text={"Agregar"} width={"75px"} height={"34px"} border={"none"} backgroundColor={"rgb(18, 0, 177)"} color={"white"} onClick={onAdd} display={num === 0  && stock !== 0 ? "inline" : "none" }/>
        <div style={{display: num === 0  ? "none" : "inline-flex", justifyContent: "center"}}>
            <Button text={"-"} width={"34px"} height={"34px"} backgroundColor={"gray"} onClick={onSub}  />
            <input style={{display: num === 0  ? "none" : "block", width: num === 10  ? "26px" : "24px"}} type="text" value={num} onChange={handleChange} />
            <Button text={"+"} width={"34px"} height={"34px"} backgroundColor={"gray"} onClick={onAdd} />
        </div>
    </div>
    )

    function onAdd(){
        num < stock ? setNum(num + 1) : setNum(num);
    }
    
    function onSub(){
        num > 0 ? setNum(num - 1) : setNum(num);
    }
    function handleChange() {
        setNum(num)
      }
}
    export default ItemCount