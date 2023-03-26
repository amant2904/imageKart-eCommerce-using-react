import React, { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CartContext from '../Store/cart-context'
import classes from "./Product.module.css";

export default function Product(props) {
    const cartCtx = useContext(CartContext)

    const addInCart_handler = (e) => {
        const item_title = e.target.parentElement.parentElement.parentElement.firstElementChild.textContent;
        const item_image = e.target.parentElement.parentElement.parentElement.children[1].firstElementChild.src;
        const item_price = e.target.parentElement.parentElement.firstElementChild.firstElementChild.textContent;
        const prd_id = e.target.parentElement.parentElement.parentElement.lastElementChild.textContent;
        const database = e.target.parentElement.parentElement.parentElement.children[3].textContent;

        const product_detail = {
            title: item_title,
            imageUrl: item_image,
            price: item_price,
            identity: prd_id,
            database: database,
            quantity: 1
        }

        cartCtx.addItem(product_detail)
    }

    const obj = {
        title: "my title"
    }

    return (
        <Col style={{ width: "45%" }} className={`${classes.whole_product} p-3`}>
            <Container >
                <h3 className='text-center mb-3 fs-4'>{props.title}</h3>
                <Link to={`/store/${props.id}`} state={obj}>
                    <img src={props.imageURL} alt="Product view" style={{ width: "100%" }} />
                </Link>
                <Row className='my-3 align-items-center'>
                    <Col>Rs. <span>{props.price}</span></Col>
                    <Col><Button variant='info' onClick={addInCart_handler} style={{ float: "right" }}>Add To Cart</Button></Col>
                </Row>
                <p hidden>{props.database_id}</p>
                <p hidden>{props.id}</p>
            </Container>
        </Col >
    )
}
