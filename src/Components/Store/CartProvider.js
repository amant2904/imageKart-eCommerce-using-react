import React, { useReducer } from 'react'
import CartContext from './cart-context'

const cartItemsReducer = (state, action) => {
    if (action.type === "add") {
        const checkIndex = state.products.findIndex((item) => {
            return item.identity.toString() === action.product.identity.toString();
        })
        if (checkIndex === -1) {
            return {
                products: [...state.products, action.product],
                totalQuantity: state.totalQuantity + action.product.quantity
            }
        }
        else {
            const currQuantity = state.products[checkIndex].quantity;
            state.products[checkIndex].quantity = parseInt(currQuantity) + 1;
            return {
                products: state.products,
                totalQuantity: state.totalQuantity + action.product.quantity
            }
        }
    }
    else if (action.type === "remove") {
        const checkIndex = state.products.findIndex((item) => {
            return item.identity.toString() === action.id.toString();
        })
        console.log(checkIndex);
        if (state.products[checkIndex].quantity === 1) {
            state.products.splice(checkIndex, 1);
            return {
                products: state.products,
                totalQuantity: state.totalQuantity - 1
            }
        }
        else {
            state.products[checkIndex].quantity -= 1;
            return {
                products: state.products,
                totalQuantity: state.totalQuantity - 1
            }
        }
    }
    return {
        products: [],
        totalQuantity: 0
    }
}

export default function CartProvider(props) {
    const [cartItems, dispatchCartItems] = useReducer(cartItemsReducer, {
        products: [],
        totalQuantity: 0
    })

    const addItem_handler = (obj) => {
        dispatchCartItems({ type: "add", product: { ...obj, quantity: 1 } })
    }

    const removeItem_handler = (id) => {
        dispatchCartItems({ type: "remove", id: id })
    }

    return (
        <CartContext.Provider value={{
            items: cartItems.products,
            addItem: addItem_handler,
            removeItem: removeItem_handler,
            totalQuantity: cartItems.totalQuantity
        }}>
            {props.children}
        </CartContext.Provider>
    )
}
