import React from 'react'
import { Col, Container, Row, CloseButton, Button } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import classes from "./Cart.module.css"
import CartItem from './CartItem'

const CartBox = (props) => {
    const cartItems = [{

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        quantity: 2,

    },

    {

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        quantity: 3,

    },

    {

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        quantity: 1,

    }]

    return (
        <Container className={classes.mycart}>
            <CloseButton onClick={props.closeCart} className={classes.closeBtn} />
            <h2 className='text-center'>Cart</h2>
            <Row className='my-4'>
                <Col md={6} className="text-center"><span className={`pb-2 ${classes.cartHeading}`}>ITEMS</span></Col>
                <Col md={2} className="text-center"><span className={`pb-2 ${classes.cartHeading}`}>PRICE</span></Col>
                <Col md={4} className="text-center"><span className={`pb-2 ${classes.cartHeading}`}>QUANTITY</span></Col>
            </Row>
            {cartItems.map((item) => {
                return <CartItem title={item.title} imageUrl={item.imageUrl} price={item.price} quantity={item.quantity} />
            })}
            <Row className='my-2'>
                <h4 className='text-end'>Total = <span>Rs. 0.00</span></h4>
            </Row>
            <Row className='justify-content-center my-4'>
                <Button className="w-auto">Purchase</Button>
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
