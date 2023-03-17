import React, { useContext } from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import CartContext from '../Store/cart-context'

export default function NavBar(props) {
    const cartCtx = useContext(CartContext);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">ImageKart</Navbar.Brand>
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
