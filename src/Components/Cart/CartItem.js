import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import classes from "./CartItem.module.css"

export default function CartItem(props) {
    return (
        <Row className={`mb-2 py-3 ${classes.cartItem}`}>
            <Col md={6} className="d-flex">
                <img src={props.imageUrl} alt="product" className={classes.prdImg} />
                <p className='my-0 mx-2' style={{ overflow: "hidden", height: "50px" }}>{props.title}</p>
            </Col>
            <Col md={2}>
                <p>Rs.{props.price}</p>
            </Col>
            <Col md={4}>
                <span className='p-2'>{props.quantity}</span><Button variant="warning" className='btn-sm'>Remove</Button>
            </Col>
        </Row>
    )
}
