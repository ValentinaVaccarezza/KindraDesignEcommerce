import { useState, createContext, useContext } from "react";
import { Cart } from "../componentes/CartWidget/CartWidget";

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [CartList, setCartList] = useState([])

    const agregarCart = (item) => {

        setCartList( [ ...CartList, item] )
    }

    const IsInCart = (id) => {
        return Cart.some( (item) =>item.id === id)
    }

    const vaciarCart=()=>{
        setCartList()
    }

    const removeItem = (id) => {
        setCartList(CartList.filter(item => item.id !== id))
    }

    const totalCompra = () => {
        let totalCompra = 0;
        CartList.forEach(item => totalCompra += item.price * item.cantidad)
        return totalCompra
    }
    return (
        <CartContext.Provider value={{
            CartList,
            agregarCart,
            vaciarCart,
            IsInCart,
            removeItem,
            totalCompra
        }}>
            
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider