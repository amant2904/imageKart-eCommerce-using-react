import React from 'react'
import { Container } from 'react-bootstrap'
import classes from "./Footer.module.css"

export default function Footer() {
    return (
        <Container fluid className="bg-info my-0">
            <h1 className={`my-0 ${classes.footer}`}>The Generics</h1>
        </Container>
    )
}
