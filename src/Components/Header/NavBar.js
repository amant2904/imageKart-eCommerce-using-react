import React, { useContext } from 'react'
import { Button, Container, Navbar, Nav } from 'react-bootstrap'
import CartContext from '../Store/cart-context'
import classes from "./NavBar.module.css"
import { Link, useLocation } from 'react-router-dom'

export default function NavBar(props) {
    const cartCtx = useContext(CartContext);
    const location = useLocation();

    return (
        <Navbar bg="dark" variant="dark" className='position-sticky top-0'>
            <Container>
                <Navbar.Brand href="/">ImageKart</Navbar.Brand>
                <Nav>
                    <Link to="/home" className={`${classes.navLink} ${(location.pathname === "/home") ? classes.active : ""}`}>Home</Link>
                    <Link to="/" className={`${classes.navLink} ${(location.pathname === "/") ? classes.active : ""}`}>Store</Link>
                    <Link to="/about" className={`${classes.navLink} ${(location.pathname === "/about") ? classes.active : ""}`}>About</Link>
                    <Link to="/movies" className={`${classes.navLink} ${(location.pathname === "/movies") ? classes.active : ""}`}>Movies</Link>
                </Nav>
                <Button onClick={props.showCart} className={classes.cartBtn}>
                    <span className={classes.cartBtn_text}>Cart</span>
                    <sup className={classes.cartBtn_num}>{cartCtx.totalQuantity}</sup>
                </Button>
            </Container>
        </Navbar>
    )
}
