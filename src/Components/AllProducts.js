import React from 'react'
import Product from './Product'
import { Button, Container, Row } from 'react-bootstrap'

export default function AllProducts(props) {
    const productsList = [{
        id: "p1",
        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    },

    {
        id: "p2",
        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    },

    {
        id: "p3",
        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    },

    {
        id: "p4",
        title: 'Blue Color',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }]

    return (
        <Container style={{ width: "50%" }} className="mt-3">
            <h1 className='text-center text-info font-weight-bold'>PRODUCTS</h1>
            <Row lg={2} className="justify-content-between">
                {productsList.map((product) => {
                    return <Product key={product.id} id={product.id} title={product.title} imageURL={product.imageUrl} price={product.price} />
                })}
            </Row>
            <Row className='justify-content-center my-2'>
                <Button onClick={props.showCart} variant='info' className='border border-3 border-dark font-weight-bold w-auto'>See Cart</Button>
            </Row>
        </Container>
    )
}
