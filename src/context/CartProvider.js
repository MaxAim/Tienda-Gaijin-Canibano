import CartContext from "./CartContext"
import React, {useState} from "react"

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addProducts = (itemInfo) => {
        if (cart.find(({ id }) => id === itemInfo.id)) {
            const itemLoader = cart.map((item) => {
                if (item.id === itemInfo.id) {
                    return { ...item, amount: itemInfo.amount }
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
    console.log(cart)
    return <CartContext.Provider value={{addProducts}}>
        {children}
    </CartContext.Provider>
}

export default CartProvider