import React, { useContext } from 'react'
import { Button, Container, Navbar, Nav } from 'react-bootstrap'
import CartContext from '../Store/cart-context'
import classes from "./NavBar.module.css"
import { Link, useLocation, useHistory } from 'react-router-dom'
import AuthContext from '../Store/auth-context'

export default function NavBar(props) {
    const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);
    const location = useLocation();
    const history = useHistory();

    const loggedIn = authCtx.isLoggedIn;

    const logout_handler = () => {
        authCtx.logout_handler();
        history.replace("/auth");
    }

    return (
        <Navbar bg="dark" variant="dark" className='position-sticky top-0'>
            <Container>
                <Navbar.Brand>
                    <Link to="/" className={classes.logo}>
                        ImageKart
                    </Link>
                </Navbar.Brand>
                <Nav>
                    <Link to="/home" className={`${classes.navLink} ${(location.pathname === "/home") ? classes.active : ""}`}>Home</Link>
                    <Link to="/store" className={`${classes.navLink} ${(location.pathname === "/store") ? classes.active : ""}`}>Store</Link>
                    <Link to="/about" className={`${classes.navLink} ${(location.pathname === "/about") ? classes.active : ""}`}>About</Link>
                    <Link to="/contact" className={`${classes.navLink} ${(location.pathname === "/contact") ? classes.active : ""}`}>Contact</Link>
                    <Link to="/movies" className={`${classes.navLink} ${(location.pathname === "/movies") ? classes.active : ""}`}>Movies</Link>
                </Nav>
                <div className='d-flex'>
                    {!loggedIn && <Link to="/auth" className={`${classes.navLink}`} variant="info">Login</Link>}
                    {loggedIn && <button onClick={logout_handler} className={`${classes.navLink} ${classes.logoutBtn}`}>Logout</button>}
                    {loggedIn && <Button onClick={props.showCart} className={classes.cartBtn}>
                        <span className={classes.cartBtn_text}>Cart</span>
                        <sup className={classes.cartBtn_num}>{cartCtx.totalQuantity}</sup>
                    </Button>}
                </div>
            </Container>
        </Navbar>
    )
}
