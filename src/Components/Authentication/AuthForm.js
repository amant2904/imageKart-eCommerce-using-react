import React, { useContext, useRef, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import classes from "./AuthForm.module.css"
import AuthContext from '../Store/auth-context';
import { useHistory } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';

export default function AuthForm() {
    const [logIn, setLogIn] = useState(true);
    const [loading, setLoading] = useState(false);

    const userEmail = useRef();
    const userPassword = useRef();

    const createAccount_handler = (e) => {
        e.preventDefault();
        setLogIn((prv) => !prv)
    }

    const api_url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAp4upS2LPL02GaKGSiXEwrjpAyMiY13JM"

    const history = useHistory();
    const authCtx = useContext(AuthContext);

    const auth_handler = async (e) => {
        e.preventDefault();
        if (logIn) {
            setLoading(true);
            try {
                const res = await fetch(api_url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({
                        email: userEmail.current.value,
                        password: userPassword.current.value,
                        returnSecureToken: true
                    })
                })
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.error.message);
                }
                authCtx.login_handler(data.idToken, data.email);
                history.push("/store");
            }
            catch (err) {
                alert(err);
            }
            setLoading(false);
        }
        else {
            setLoading(true);
            try {
                const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAp4upS2LPL02GaKGSiXEwrjpAyMiY13JM", {
                    method: 'POST',
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({
                        email: userEmail.current.value,
                        password: userPassword.current.value,
                        returnSecureToken: true
                    })
                });
                const data = await res.json();
                console.log(res);
                console.log(data);
                if (!res.ok) {
                    throw new Error(data.error.message);
                }
                alert("Account successfully created for \n" + data.email);
                setLogIn(true);
            }
            catch (err) {
                alert(err);
            }
            setLoading(false);
        }
    }

    return (
        <Form className={`${classes.authForm} shadow-lg`}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={userEmail} type="email" placeholder="Enter email" className={`${classes.formInput}`} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={userPassword} type="password" placeholder="Password" className={`${classes.formInput}`} />
            </Form.Group>
            {loading && <LoadingSpinner className={classes.loader} />}
            {!loading && <Button onClick={auth_handler} variant="info" type="submit" className='text-white d-block m-auto px-4 py-2'>
                {logIn ? "Login" : "Sign Up"}
            </Button>}
            {!loading && <button className={`d-block ${classes.createAccount}`} onClick={createAccount_handler}>
                {logIn ? "Create New Account" : "Log In With Existing Account"}
            </button>}
        </Form>
    )
}
