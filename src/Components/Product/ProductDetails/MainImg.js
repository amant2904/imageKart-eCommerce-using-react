import React from 'react'
import { Button, Col } from 'react-bootstrap'
import classes from "./MainImg.module.css"

export default function MainImg(props) {
    return (
        <Col md={4}>
            <div className={classes.mainImg}>
                <img src={props.img} alt="t-shirt" />
            </div>
            <div className='d-flex align-items-center justify-content-center my-1'>
                <Button className={`mx-3 px-4 py-2 text-light fs-4`} variant="info">Add To Cart</Button>
                <Button className={`mx-3 px-4 py-2 text-light fs-4`} variant="info">See Your Cart</Button>
            </div>
        </Col>
    )
}
