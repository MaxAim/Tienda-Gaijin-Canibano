import "./Formulary.css";
import React from "react";
import Button from "../../components/Button";

function Formulary ({setUserInfo, userInfo, completeOrder}) {

    const handleOnclick = () => {
        completeOrder()
    }
    
    const handleChange = (event) => {
        const { name, value } = event.target
        setUserInfo((state) => {
            return { ...state, [name]: value }
        })
    }
    

    return(
        <div className={"tableDark"} style={{flexFlow: "column"}}>
            <fieldset>
                <legend>Informacion personal</legend>
                <div>
                    <p>Nombre:</p><input type={"text"} required onChange={handleChange} value={userInfo.name} id={"nombre"} name={"name"} placeholder={"Nombre"} />
                    <p>Direccion:</p><input type={"text"} required onChange={handleChange} value={userInfo.adress} id={"direccion"} name={"adress"} placeholder={"Direccion"} />
                    <p>Mail:</p><input required onChange={handleChange} value={userInfo.email} id={"email"} placeholder={"Email"} type={"email"} name={"email"} />
                    <p>Telefono:</p><input type={"text"} required onChange={handleChange} value={userInfo.phone} id={"telefono"} placeholder={"phone"} name={"phone"} />
                    <p>Informacion extra:</p><textarea onChange={handleChange} value={userInfo.extra} name={"extra"} id={"info"} rows={"20"} placeholder={"Informacion extra"} />
                </div>
                <img src={"https://raw.githubusercontent.com/MaxAim/tienda-gaijin-canibano/main/src/img/contacto.png"} alt={"Kawaii"} />
            </fieldset>
            <fieldset style={{display: "flex", justifyContent: "end"}}>
                <legend>Confirmar</legend>
                <Button border={"none"} backgroundColor={"rgb(18, 0, 177)"} color={"white"} text={"Finalizar Compra"} onClick={handleOnclick} height={"50px"} width={"100%"} />   
            </fieldset>
        </div>
    )
}

export default Formulary