import React, { useContext } from 'react'
import { Button, Container, Navbar, Nav } from 'react-bootstrap'
import CartContext from '../Store/cart-context'
import classes from "./NavBar.module.css"

export default function NavBar(props) {
    const cartCtx = useContext(CartContext);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">ImageKart</Navbar.Brand>
                <Nav>
                    <Nav.Link to="/about" className={classes.navLink}>About</Nav.Link>
                    <Nav.Link to="/store" className={classes.navLink}>Store</Nav.Link>
                </Nav>
                <Button onClick={props.showCart} className={classes.cartBtn}>
                    <span className={classes.cartBtn_text}>Cart</span>
                    <sup className={classes.cartBtn_num}>{cartCtx.totalQuantity}</sup>
                </Button>
            </Container>
        </Navbar>
    )
}
