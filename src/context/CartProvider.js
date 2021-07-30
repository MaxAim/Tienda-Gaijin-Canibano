import CartContext from "./CartContext"
import React, {useState} from "react"

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartNum, setCartNum] = useState(0)
    const addProducts = (itemInfo) => {
        if (cart.find(({ id }) => id === itemInfo.id)) {
            const itemLoader = cart.map((item) => {
                if (item.id === itemInfo.id) {
                    if(item.amount + itemInfo.amount >= itemInfo.stock){
                        alert("Stock insuficiente")
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

    const cartLoad = () => {
        setCartNum(cart.reduce((acumulador, item) => acumulador + item.amount, 0))
    }

    const deleteItem = (toDelete) => {
        return cart.splice(cart.indexOf(toDelete), 1)
    }

    const totalPrice = () => {
        const subTotal = cart.reduce((acumulador, item) => acumulador + item.price * item.amount, 0)
        return subTotal
    }
    

    return <CartContext.Provider value={{addProducts, cartLoad, deleteItem, totalPrice, setCart, cart, cartNum }}>
        {children}
    </CartContext.Provider>
}

export default CartProvider