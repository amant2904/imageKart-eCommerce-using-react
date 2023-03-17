import React from 'react'
import Product from './Product'
import { Container, Row } from 'react-bootstrap'

export default function AllProducts() {
    const productsList = [{

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    },

    {

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    },

    {

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    },

    {

        title: 'Blue Color',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    }]

    return (
        <Container style={{ width: "50%" }} className="mt-3">
            <h2 className='text-center text-primary font-weight-bold'>PRODUCTS</h2>
            <Row lg={2} className="justify-content-between">
                {productsList.map((product) => {
                    return <Product title={product.title} imageURL={product.imageUrl} price={product.price} />
                })}
            </Row>
        </Container>
    )
}
