import React from 'react'
import { Container } from 'react-bootstrap'
import loader from "../../Assets/loader.png"
import classes from "./LoadingSpinner.module.css"

export default function LoadingSpinner(props) {
    const contHeight = props.minHeight;
    return (
        <Container className={`d-flex align-items-center justify-content-center`} style={{ minHeight: contHeight }}>
            <img src={loader} alt="loading..." className={`${classes.spinner} ${props.className}`} style={props.style} />
        </Container >
    )
}
