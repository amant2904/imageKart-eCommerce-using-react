import React, { useState } from 'react';
import './App.css';
// import AllProducts from './Components/AllProducts';
// import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/Store/CartProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Pages/Root';
import About from "./Components/Pages/About"
import Store from './Components/Pages/Store';

function App() {
  // cart show and hide handler
  const [showCart, setShowCart] = useState(false);

  const hideCart_handler = () => {
    setShowCart(false);
  }

  const showCart_handler = () => {
    setShowCart(true);
  }

  // router creation
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root showCart={showCart_handler} />,
      children: [
        { path: "/about", element: <About /> },
        { path: "/store", element: <Store /> }
      ]
    }
  ])


  return (
    <CartProvider>
      {showCart && <Cart closeCart={hideCart_handler} />}
      {/* <Header showCart={showCart_handler} />
      <AllProducts /> */}
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
