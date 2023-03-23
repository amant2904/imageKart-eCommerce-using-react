import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function RatingForm(props) {
    const [review, setReview] = useState("");
    const [review_name, setReviewName] = useState("");

    const review_handler = (e) => {
        setReview(e.target.value);
    }

    const reviewName_handler = (e) => {
        setReviewName(e.target.value);
    }

    const reviewSubmit_handler = (e) => {
        e.preventDefault();
        props.reviewSubmit({
            userName: review_name,
            review: review
        })
    }

    return (
        <Form className='p-3 mx-0 my-2 border border-1s border-secondary rounded-3 shadow'>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={review_name} onChange={reviewName_handler} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Write Your Review</Form.Label>
                <Form.Control as="textarea" rows={3} value={review} onChange={review_handler} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={reviewSubmit_handler}>
                Submit
            </Button>
        </Form>
    )
}
