import React, { createContext, useEffect, useLayoutEffect, useState } from "react";


export const CartContext = createContext([])


export const CartContextProvider = ({children}) => {
    const [CartList, setCartList] = useState([])
    const [total, setTotal] = useState(null);
    
    

    const IsInCart = (prod) => {
        return CartList.some ( (item) => item.id === prod)
    }
    const addCart = (item) => {
        if (IsInCart(item.id)) {
            let itemIndex = CartList.findIndex(prod => prod.id === item.id)
            CartList[itemIndex].quantity += item.quantity
        } 
        else {
            setCartList( [ ...CartList, item] )
        } 
        totalQuantity()
    }


    const removeCart=()=>{
        setCartList([])
    }

    const removeItem = (id) => {
        setCartList(CartList.filter(item => item.id !== id))
    }

    const totalShop = () => {
        let totalShop = 0;
        CartList.forEach(item => totalShop += item.price * item.quantity)
        return totalShop
    }
    const totalQuantity = () => {
        let totalQuantity = 0;
        CartList.forEach(item => totalQuantity += item.quantity)
        setTotal(totalQuantity)
    }
    useEffect(() => {
        totalQuantity()
    }, [CartList])
    return (
        <CartContext.Provider value={{
            CartList,
            total,
            addCart,
            removeCart,
            IsInCart,
            removeItem,
            totalShop,
            totalQuantity
        }}>
            
            {children}
        </CartContext.Provider>
    )
}