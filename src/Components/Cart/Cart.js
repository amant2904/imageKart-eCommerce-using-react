import React, { useContext } from 'react'
import { Col, Container, Row, CloseButton, Button } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import classes from "./Cart.module.css"
import CartItem from './CartItem'
import CartContext from '../Store/cart-context'

const CartBox = (props) => {
    const cartCtx = useContext(CartContext);

    const totaAmount = cartCtx.items.reduce((currAmount, item) => {
        return currAmount + (item.quantity * item.price)
    }, 0)

    return (
        <Container className={`${classes.mycart} position-fixed`}>
            <CloseButton onClick={props.closeCart} className={classes.closeBtn} />
            <h2 className='text-center'>Cart</h2>
            <Row className='my-4 align-items-center'>
                <Col md={5} className="text-center"><span className="pb-2 border-bottom border-2 border-dark d-flex justify-content-center align-items-center">ITEMS</span></Col>
                <Col md={2} className="text-center"><span className="pb-2 border-bottom border-2 border-dark d-flex justify-content-center align-items-center">PRICE</span></Col>
                <Col md={5} className="text-center"><span className="pb-2 border-bottom border-2 border-dark d-flex justify-content-center align-items-center">QUANTITY</span></Col>
            </Row>
            {cartCtx.items.map((item) => {
                return <CartItem key={item.identity} title={item.title} imageUrl={item.imageUrl} price={item.price} quantity={item.quantity} identity={item.identity} />
            })}
            <Row className='my-2'>
                <h4 className='text-end'>Total = <span>Rs. {totaAmount.toFixed(2)}</span></h4>
            </Row>
            <Row className='justify-content-center my-4'>
                <Button className="w-auto btn-lg border border-2 border-dark text-light" variant='info'>Purchase</Button>
            </Row>
        </Container>
    )
}

export default function Cart(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<CartBox closeCart={props.closeCart} />, document.getElementById("cart"))}
        </React.Fragment>
    )
}
