import React from "react";

const CartContext = React.createContext({
    items: [],
    addItem: () => { },
    removeItem: () => { }
})

export default CartContext;