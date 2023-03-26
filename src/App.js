import React, { useContext, useState } from 'react';
import './App.css';
import Store from './Components/Pages/Store';
import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/Store/CartProvider';
import About from "./Components/Pages/About"
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import Footer from './Components/Footer/Footer';
import Movies from './Components/Pages/Movies';
import Contactus from './Components/Pages/Contactus';
import ProductDetail from "./Components/Product/ProductDetails/ProductDetail"
import ProductContextProvider from './Components/Store/ProductContextProvider';
import Login from './Components/Pages/Login';
import AuthContext from './Components/Store/auth-context';


function App() {

  // cart show and hide handler
  const [showCart, setShowCart] = useState(false);

  const hideCart_handler = () => {
    setShowCart(false);
  }

  const showCart_handler = () => {
    setShowCart(true);
  }

  const authCtx = useContext(AuthContext);
  const loggedIn = authCtx.isLoggedIn;
  console.log(loggedIn);

  return (
    <CartProvider>
      {showCart && <Cart closeCart={hideCart_handler} />}
      <Header showCart={showCart_handler} />
      <Switch>
        <Route path="/auth">
          <Login />
        </Route>
        <Route path='/home' >
          <HomePage />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path='/store'>
          {loggedIn && <ProductContextProvider>
            <Store showCart={showCart_handler} />
          </ProductContextProvider>}
          {!loggedIn && <Redirect to="/auth" />}
        </Route>
        <Route exact path='/store/:productId'>
          <ProductContextProvider>
            <ProductDetail />
          </ProductContextProvider>
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contactus />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
      </Switch>
      <Footer />
    </CartProvider>
  );
}

export default App;
