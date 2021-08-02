import "./Formulary.css";
import React, {useContext} from "react";
import Button from "../../components/Button";
import CartContext from "../../context/CartContext";

function Formulary ({setUserInfo, userInfo, completeOrder}) {
    const {setErrorText, handleShow} = useContext(CartContext)
    const neededValues = [userInfo.name, userInfo.address, userInfo.email, userInfo.phone]
    const emailRules = userInfo["email"].lastIndexOf('@') < userInfo["email"].lastIndexOf('.') && userInfo["email"].lastIndexOf('@') > 0 && userInfo["email"].indexOf('@@') === -1 && userInfo["email"].lastIndexOf('.') > 2 && (userInfo["email"].length - userInfo["email"].lastIndexOf('.')) > 2
    const phoneRules = event => {!(isFinite(event.key) || event.keyCode === 8) && event.preventDefault()}

    const errorHandler = () => {
        emailRules === true ? setErrorText("Datos faltantes") : setErrorText("Correo electronico invalido")
        handleShow()
    }
    


    const handleOnclick = () => {
        const completedForm = neededValues.find(element => element === "")
        completedForm === undefined && emailRules === true ? 
        completeOrder()
        :
        errorHandler()
    }
    
    const handleChange = (event) => {
        const { name, value } = event.target

        console.log(userInfo)
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
                    <p>Telefono:</p><input type={"text"} required onChange={handleChange} onKeyDown={phoneRules} value={userInfo.phone} id={"telefono"} placeholder={"phone"} name={"phone"} />
                    <p>Informacion extra:</p><textarea onChange={handleChange} value={userInfo.extra} name={"extra"} id={"info"} rows={"20"} placeholder={"Informacion extra"} />
                </div>
                <img src={"https://firebasestorage.googleapis.com/v0/b/tienda-gaijin.appspot.com/o/contacto.png?alt=media&token=6dfbf502-6abf-48da-b6c2-c5b077698005"} alt={"Kawaii"} />
            </fieldset>
            <fieldset style={{display: "flex", justifyContent: "end"}}>
                <legend>Confirmar</legend>
                <Button border={"none"} backgroundColor={"rgb(18, 0, 177)"} color={"white"} text={"Finalizar Compra"} onClick={handleOnclick} height={"50px"} width={"100%"} />   
            </fieldset>
        </div>
    )
}

export default Formulary