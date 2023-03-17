import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export default function Product(props) {
    return (
        <Col style={{ width: "45%" }} className="p-3">
            <Container >
                <h3 className='text-center mb-3 fs-4'>{props.title}</h3>
                <img src={props.imageURL} alt="Product view" style={{ width: "100%" }} />
                <Row className='my-3'>
                    <Col>Rs. {props.price}</Col>
                    <Col><Button variant='primary'>Add To Cart</Button></Col>
                </Row>
            </Container>
        </Col>
    )
}
