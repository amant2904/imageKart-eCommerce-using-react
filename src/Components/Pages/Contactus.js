import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import classes from "./Contactus.module.css"
import contactImg from "../../Assets/contactImg.jpg"
import ContactGreeting from '../Overlays/ContactGreeting'

export default function Contactus() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [greeting, setGreeting] = useState(false);

    const api_url = "https://iimagekart-ecommerce-by-react-default-rtdb.firebaseio.com/contact-list.json"

    const name_handler = (e) => {
        setName(e.target.value);
    }

    const email_handler = (e) => {
        setEmail(e.target.value);
    }

    const phone_handler = (e) => {
        setPhone(e.target.value);
    }

    const contactSubmit_handler = async (e) => {
        e.preventDefault();
        if (name.trim().length > 0 && phone.trim().length > 0 && email.includes("@")) {
            let obj = {
                name: name,
                email: email,
                phone: phone
            }
            let res = await fetch(api_url, {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    "Contact-Type": "application/json"
                }
            })
            if (res.ok) {
                setGreeting(true)
            }
        }
        else {
            alert("invalid input")
        }
    }

    const closeGreeting_handler = () => {
        setGreeting(false);
    }

    return (
        <Container className={`${classes.contact} d-flex align-items-center justify-content-center`} fluid>
            {greeting && <ContactGreeting closeBox={closeGreeting_handler} />}
            <Row className={classes.formRow}>
                <Col lg={6} className="p-0">
                    <img src={contactImg} alt="contact us" className={classes.contactImg} />
                    <p className='my-0 mx-2 p-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum repellendus quaerat aliquam culpa aspernatur expedita. Veritatis voluptatem rerum dicta quos esse? Accusamus, quod ipsa? Necessitatibus architecto beatae repellendus! Illo expedita neque ut.</p>
                </Col>
                <Col lg={6} className="px-0 py-3 bg-light shadow-lg">
                    <h1 className='text-center my-3 p-0'>Contact Us</h1>
                    <Form className={`p-3`} onSubmit={contactSubmit_handler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" value={name} onChange={name_handler} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={email_handler} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="number" placeholder="Enter Phone Number" value={phone} onChange={phone_handler} />
                        </Form.Group>
                        <Button variant="info" className='text-light d-block m-auto py-2 px-4 fs-5' type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
