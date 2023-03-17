import React, { useState } from 'react';
import './App.css';
import AllProducts from './Components/AllProducts';
import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/Store/CartProvider';

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCart_handler = () => {
    setShowCart(true);
  }

  const hideCart_handler = () => {
    setShowCart(false);
  }
  return (
    <CartProvider>
      {showCart && <Cart closeCart={hideCart_handler} />}
      <Header showCart={showCart_handler} />
      <AllProducts />
    </CartProvider>
  );
}

export default App;
