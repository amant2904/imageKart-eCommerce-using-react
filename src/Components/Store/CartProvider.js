import React, { useContext, useEffect, useReducer } from 'react'
import CartContext from './cart-context'
import AuthContext from './auth-context'
import ProductContext from './product-context'

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
    else if (action.type === "firstFetch") {
        let totalQuantity = 0;
        const all_products = action.list.map((product) => {
            let prd = {
                title: product.title,
                imageUrl: product.imageUrl,
                price: product.price,
                identity: product.identity,
                database_id: product._id,
                quantity: product.quantity
            }
            totalQuantity += product.quantity;
            return prd;
        })
        return {
            products: all_products,
            totalQuantity: totalQuantity
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

    const authCtx = useContext(AuthContext);
    function emailFilter(email) {
        let new_email = "";
        for (let i in email) {
            if (email[i] !== "@" && email[i] !== ".") {
                new_email += email[i];
            }
        }
        return new_email;
    }
    const loggedIn = authCtx.isLoggedIn;
    const currUserEmail = emailFilter(authCtx.userEmail);
    const api_url = "https://crudcrud.com/api/455fc201b1d942e196840eaa1e8b1418";

    const prdCtx = useContext(ProductContext);


    useEffect(() => {
        if (loggedIn) {
            const cartFetcher = async () => {
                try {
                    let res = await fetch(api_url + "/cart" + currUserEmail);
                    let data = await res.json();
                    if (!res.ok) {
                        throw new Error("something went wrong");
                    }
                    dispatchCartItems({ type: "firstFetch", list: data })
                    prdCtx.firstUpdate_handler(data);
                }
                catch (err) {
                    console.log(err);
                }
            }
            cartFetcher();
        }
    }, [currUserEmail, loggedIn])
    // currUserEmail, api_url, prdCtx

    const addItem_handler = async (obj) => {
        if (obj.database) {
            try {
                const prv = await fetch(api_url + "/cart" + currUserEmail + "/" + obj.database);
                const prv_data = await prv.json();
                if (!prv.ok) {
                    throw new Error("Something went wrong")
                }
                const res = await fetch(api_url + "/cart" + currUserEmail + "/" + obj.database, {
                    method: "PUT",
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({
                        ...obj,
                        quantity: parseInt(prv_data.quantity) + 1
                    })
                })
                if (!res.ok) {
                    throw new Error("Something Went Wrong");
                }
                dispatchCartItems({ type: "add", product: { ...obj, quantity: 1 } })
            }
            catch (err) {
                console.log(err);
            }
        }
        else {
            try {
                let res = await fetch(api_url + "/cart" + currUserEmail, {
                    method: 'POST',
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify(obj)
                })
                let data = await res.json();
                if (!res.ok) {
                    throw new Error(data);
                }
                prdCtx.database_handler(obj.identity, data._id)
                dispatchCartItems({ type: "add", product: { ...obj, quantity: 1, database_id: data._id } })
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    const removeItem_handler = async (obj) => {
        if (parseInt(obj.quantity) === 1) {
            try {
                const res = await fetch(api_url + "/cart" + currUserEmail + "/" + obj.database, {
                    method: 'DELETE'
                })
                if (!res.ok) {
                    throw new Error("error found");
                }
                dispatchCartItems({ type: "remove", id: obj.identity })
            }
            catch (err) {
                console.log(err);
            }
        }
        else {
            try {
                const prv = await fetch(api_url + "/cart" + currUserEmail + "/" + obj.database);
                const prv_data = await prv.json();
                if (!prv.ok) {
                    throw new Error("Something went wrong")
                }
                const res = await fetch(api_url + "/cart" + currUserEmail + "/" + obj.database, {
                    method: "PUT",
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({
                        ...obj,
                        quantity: parseInt(prv_data.quantity) - 1
                    })
                })
                if (!res.ok) {
                    throw new Error("Something Went Wrong");
                }
                dispatchCartItems({ type: "remove", id: obj.identity })
            }
            catch (err) {
                console.log(err);
            }
        }
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
