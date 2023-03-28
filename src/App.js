import React, { useContext, useState, Suspense } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';
import CartProvider from './Components/Store/CartProvider';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import Footer from './Components/Footer/Footer';
import Login from './Components/Pages/Login';
import AuthContext from './Components/Store/auth-context';
import LoadingSpinner from './Components/UI/LoadingSpinner';

const About = React.lazy(() => import('./Components/Pages/About'));
const Contactus = React.lazy(() => import('./Components/Pages/Contactus'));
const Store = React.lazy(() => import('./Components/Pages/Store'));
const ProductDetail = React.lazy(() => import('./Components/Product/ProductDetails/ProductDetail'));
const Movies = React.lazy(() => import('./Components/Pages/Movies'))


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
  if (!loggedIn && showCart) {
    hideCart_handler();
  }

  return (
    <CartProvider>
      <Suspense fallback={<LoadingSpinner style={{ height: "230px", width: "230px" }} minHeight="100vh" />}>
        {showCart && <Cart closeCart={hideCart_handler} />}
        <Header showCart={showCart_handler} />
        <Switch>
          {!loggedIn && <Route path="/auth">
            <Login />
          </Route>}
          <Route exact path='/' >
            <HomePage />
          </Route>
          <Route exact path="/home">
            <Redirect to="/" />
          </Route>
          <Route exact path='/store'>
            {loggedIn && <Store showCart={showCart_handler} />}
            {!loggedIn && <Redirect to="/auth" />}
          </Route>
          <Route exact path='/store/:productId'>
            <ProductDetail />
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
          <Route path='*'>
            <Redirect to="/home" />
          </Route>
        </Switch>
        <Footer />
      </Suspense>
    </CartProvider>
  );
}

export default App;
