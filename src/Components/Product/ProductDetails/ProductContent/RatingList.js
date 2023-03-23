import React from 'react'
// import classes from "./RatingList.module.css"
import { Container, Row } from 'react-bootstrap'

export default function RatingList(props) {
    return (
        <Container className='border px-3 my-3'>
            {props.list.map((rating) => {
                return <Row className='border border-1 my-2 rounded-3 shadow p-3' key={Math.random()}>
                    <p className='fs-3 p-2'>{rating.review}</p>
                    <h3 className='fs-5'>By:- {rating.userName}</h3>
                </Row>
            })}
        </Container>
    )
}
