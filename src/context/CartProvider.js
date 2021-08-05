import CartContext from "./CartContext"
import React, {useState, useEffect} from "react"

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [show, setShow] = useState(false);
    const [errorText, setErrorText] = useState("Error no especificado")
    const [cartNum, setCartNum] = useState(0)
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const addProducts = (itemInfo) => {
        if (cart.find(({ id }) => id === itemInfo.id)) {
            const itemLoader = cart.map((item) => {
                if (item.id === itemInfo.id) {
                    if(item.amount + itemInfo.amount >= itemInfo.stock){
                        setErrorText("Stock insuficiente")
                        handleShow()
                    }
                    else{
                        return { ...item, amount: item.amount + itemInfo.amount}
                    }
                }
                return item
            })
            setCart(itemLoader)
        }
        else {
            setCart((state) => {
                return [...state, itemInfo]
            })
        }
    }

    useEffect(() => {
        setCartNum(cart.reduce((acumulador, item) => acumulador + item.amount, 0))
    }, [cart]);

    const deleteItem = (toDelete) => {
        cart.splice(cart.indexOf(toDelete), 1)
        setCartNum(cart.reduce((acumulador, item) => acumulador + item.amount, 0))
    }

        
    const totalPrice = () => {
        const subTotal = cart.reduce((acumulador, item) => acumulador + item.price * item.amount, 0)
        return subTotal
    }
    

    return <CartContext.Provider value={{addProducts, deleteItem, totalPrice, setCart, handleShow, handleClose, setErrorText,cart , cartNum, show, errorText }}>
        {children}
    </CartContext.Provider>
}

export default CartProvider