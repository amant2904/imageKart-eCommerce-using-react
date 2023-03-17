import React, { useContext } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import CartContext from '../Store/cart-context'
import classes from "./CartItem.module.css"

export default function CartItem(props) {
    const cartCtx = useContext(CartContext)

    const removeFromCart_handler = (e) => {
        const prd_id = e.target.parentElement.parentElement.lastElementChild.textContent;
        cartCtx.removeItem(prd_id)
    }

    return (
        <Row className={`mb-2 py-3 ${classes.cartItem}`}>
            <Col md={5} className="d-flex">
                <img src={props.imageUrl} alt="product" className={classes.prdImg} />
                <p className='my-0 mx-2' style={{ overflow: "hidden", height: "50px" }}>{props.title}</p>
            </Col>
            <Col md={2}>
                <p>Rs.{props.price}</p>
            </Col>
            <Col md={5}>
                <span className='p-2'>x {props.quantity}</span><Button variant="warning" className='btn-sm' onClick={removeFromCart_handler}>Remove</Button>
            </Col>
            <p hidden>{props.identity}</p>
        </Row>
    )
}
