import React from "react";

const CartContext = React.createContext({
    items: [],
    addItem: () => { },
    removeItem: () => { },
    totalQuantity: 0,
    fetching: false
})

export default CartContext;