import React from "react";

const ProductContext = React.createContext({
    products: [],
    database_handler: () => { },
    database_remover: () => { },
    firstUpdate_handler: () => { }
})

export default ProductContext;