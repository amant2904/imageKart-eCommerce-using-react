import React from 'react'
import { Container } from 'react-bootstrap'
import AuthForm from '../Authentication/AuthForm'
import classes from "./Login.module.css"

export default function Login() {
    return (
        <Container className={`${classes.loginForm} d-flex align-items-center justify-content-center`}>
            <AuthForm />
        </Container>
    )
}
