import React, { useState } from 'react';
import './App.css';
import AllProducts from './Components/AllProducts';
import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/Store/CartProvider';
import About from "./Components/Pages/About"
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';


function App() {

  // cart show and hide handler
  const [showCart, setShowCart] = useState(false);

  const hideCart_handler = () => {
    setShowCart(false);
  }

  const showCart_handler = () => {
    setShowCart(true);
  }


  return (
    <CartProvider>
      {showCart && <Cart closeCart={hideCart_handler} />}
      <Header showCart={showCart_handler} />
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route exact path='/' element={<AllProducts showCart={showCart_handler} />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
