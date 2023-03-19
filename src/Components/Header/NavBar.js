import React, { useContext } from 'react'
import { Button, Container, Navbar, Nav } from 'react-bootstrap'
import CartContext from '../Store/cart-context'
import classes from "./NavBar.module.css"
import { Link } from 'react-router-dom'

export default function NavBar(props) {
    const cartCtx = useContext(CartContext);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">ImageKart</Navbar.Brand>
                <Nav>
                    <Nav.Link>
                        <Link to="/" className={classes.navLink}>Store</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/about" className={classes.navLink}>About</Link>
                    </Nav.Link>
                </Nav>
                <Button onClick={props.showCart} className={classes.cartBtn}>
                    <span className={classes.cartBtn_text}>Cart</span>
                    <sup className={classes.cartBtn_num}>{cartCtx.totalQuantity}</sup>
                </Button>
            </Container>
        </Navbar>
    )
}
