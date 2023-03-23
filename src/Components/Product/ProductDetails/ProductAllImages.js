import React from 'react'
import { Col } from 'react-bootstrap'
import classes from "./ProductAllImages.module.css"

export default function ProductAllImages(props) {
    const imgChange_handler = (e) => {
        props.imgChange(e.target.src);
    }

    return (
        <Col md={1} className={`${classes.otherImg}`}>
            {props.images.map((img) => {
                return <div className={classes.allImg} onMouseEnter={imgChange_handler} key={Math.random()}>
                    <img src={img} alt="tshirt" />
                </div>
            })}
        </Col>
    )
}
