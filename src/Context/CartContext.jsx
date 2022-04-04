import React, { createContext, useEffect, useLayoutEffect, useState } from "react";


export const CartContext = createContext([])


export const CartContextProvider = ({children}) => {
    const [CartList, setCartList] = useState([])
    const [total, setTotal] = useState(null)

    const IsInCart = (prod) => {
        return CartList.some ( (item) => item.id === prod)
    }
    const agregarCart = (item) => {
        if (IsInCart(item.id)) {
            let itemIndex = CartList.findIndex(prod => prod.id === item.id)
            CartList[itemIndex].cantidad += item.cantidad
        } 
        else {
            setCartList( [ ...CartList, item] )
        } 
        totalCantidad()
    }


    const vaciarCart=()=>{
        setCartList([])
    }

    const removeItem = (id) => {
        setCartList(CartList.filter(item => item.id !== id))
    }

    const totalCompra = () => {
        let totalCompra = 0;
        CartList.forEach(item => totalCompra += item.price * item.cantidad)
        return totalCompra
    }
    const totalCantidad = () => {
        let totalCantidad = 0;
        CartList.forEach(item => totalCantidad += item.cantidad)
        setTotal(totalCantidad)
    }
    useEffect(() => {
        totalCantidad()
    }, [CartList])
    return (
        <CartContext.Provider value={{
            CartList,
            total,
            agregarCart,
            vaciarCart,
            IsInCart,
            removeItem,
            totalCompra,
            totalCantidad
        }}>
            
            {children}
        </CartContext.Provider>
    )
}