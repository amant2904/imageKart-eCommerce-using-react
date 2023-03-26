import React from 'react'
import { Container } from 'react-bootstrap'
import loader from "../../Assets/loader.png"

export default function LoadingSpinner(props) {
    return (
        <Container className='d-flex align-items-center justify-content-center'>
            <img src={loader} alt="loading..." className={props.className} />
        </Container>
    )
}
