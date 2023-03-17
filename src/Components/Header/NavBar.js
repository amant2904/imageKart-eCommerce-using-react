import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'

export default function NavBar(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">ImageKart</Navbar.Brand>
                <Button onClick={props.showCart} style={{
                    border: "2px solid rgb(113 243 245)",
                    backgroundColor: "transparent",
                    fontWeight: "bolder",
                    padding: "2px 0px 2px 8px",
                    width: "fit-content"
                }}>Cart <span style={{
                    position: "relative",
                    top: "-13px",
                    left: "16px",
                    fontSize: "18px",
                    color: "rgb(113 243 245)",
                }}>0</span></Button>
            </Container>
        </Navbar>
    )
}
