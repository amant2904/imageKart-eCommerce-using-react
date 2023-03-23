import React, { useContext } from 'react'
import Product from '../Product/Product'
import { Button, Container, Row } from 'react-bootstrap'
import classes from "./Store.module.css"
import ProductContext from '../Store/product-context'

export default function AllProducts(props) {
    const prdCtx = useContext(ProductContext);

    return (
        <React.Fragment>
            <Container fluid className='bg-secondary d-flex flex-column align-items-center'>
                <h1 className={`text-light text-center ${classes.header_text}`}>The Generics</h1>
            </Container>
            <Container style={{ width: "50%" }} className="mt-3">
                <h1 className='text-center text-info font-weight-bold'>PRODUCTS</h1>
                <Row lg={2} className="justify-content-between">
                    {prdCtx.map((product) => {
                        return <Product key={product.id} id={product.id} title={product.title} imageURL={product.imageUrl[0]} price={product.price} />
                    })}
                </Row>
                <Row className='justify-content-center my-2'>
                    <Button onClick={props.showCart} variant='info' className='border border-3 border-dark font-weight-bold w-auto mb-4'>See Cart</Button>
                </Row>
            </Container>
        </React.Fragment>
    )
}
