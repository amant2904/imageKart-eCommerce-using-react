import React, { useContext } from 'react'
import { Button, Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import CartContext from '../Store/cart-context'
import classes from "./NavBar.module.css"

export default function NavBar(props) {
    const cartCtx = useContext(CartContext);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">ImageKart</Navbar.Brand>
                <Nav>
                    {/* <NavLink to="/">Home</NavLink> */}
                    <NavLink to="/about" className={(isActive) => isActive ? classes.navLink : undefined}>About</NavLink>
                    <NavLink to="/store" className={(isActive) => isActive ? classes.navLink : undefined}>Store</NavLink>
                </Nav>
                <Button onClick={props.showCart} style={{
                    border: "2px solid rgb(113 243 245)",
                    backgroundColor: "transparent",
                    fontWeight: "bolder",
                    padding: "2px 8px 2px",
                    width: "fit-content"
                }}>Cart <span style={{ color: "rgb(113 243 245)", fontWeight: "bolder" }}>{cartCtx.totalQuantity}</span></Button>
            </Container>
        </Navbar>
    )
}
