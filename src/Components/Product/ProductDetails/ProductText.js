import React, { useState } from 'react'
import classes from "./ProductText.module.css"
import { Col, Accordion, Table, Row, Button } from 'react-bootstrap'
import RatingForm from './ProductContent/RatingForm';
import RatingList from './ProductContent/RatingList';

function ProductText(props) {
    const [ratingForm, setRatingForm] = useState(false);
    const [ratings, setRatings] = useState([
        {
            userName: "Malti Singh",
            review: "this is amazing product"
        },
        {
            userName: "suresh Singh",
            review: "this is amazing product"
        },
        {
            userName: "Akhil Tiwari",
            review: "this is amazing product"
        },
        {
            userName: "Malti Singh",
            review: "this is amazing product"
        },
        {
            userName: "Malti Singh",
            review: "this is amazing product"
        }
    ]);

    const reviewSubmit_handler = (obj) => {
        setRatingForm(false);
        setRatings((prv) => {
            return [obj, ...prv];
        })
    }

    const showRating_handler = () => {
        setRatingForm(true);
    }

    return (
        <Col md={7} className={`${classes.product_content}`}>
            {/* UPPER TEXT */}

            <p className={`fs-4 ${classes.content_title}`}>{props.details.title}</p>
            <p className='my-0 d-flex align-items-center'><span className='fs-2'>Rs. {props.details.price}</span><strike
                className="mx-2 fs-5 text-secondary">Rs. 1499</strike></p>
            <p className='my-1'><span className={`fs-5 ${classes.reviewMark}`}>4&#9733;</span>
                <span className={`text-secondary mx-2`}>12,543 ratings and 2,345 reviews</span>
            </p>
            <div className={`my-4`}>
                <h3 className='fs-4'>Available Offers</h3>
                <ul className={`${classes.offerList}`}>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, reprehenderit?</li>
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, aut officia.</li>
                </ul>
            </div>
            <hr />

            {/* Details Accordian */}
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Product Details</Accordion.Header>
                    <Accordion.Body>
                        <Table>
                            <thead>

                            </thead>
                            <tbody>
                                <tr>
                                    <td className={`text-center`}><b>detail 1</b></td>
                                    <td className={`text-center`}>detail 1</td>
                                </tr>
                                <tr>
                                    <td className={`text-center`}><b>detail 2</b></td>
                                    <td className={`text-center`}>detail 2</td>
                                </tr>
                                <tr>
                                    <td className={`text-center`}><b>detail 3</b></td>
                                    <td className={`text-center`}>detail 3</td>
                                </tr>
                                <tr>
                                    <td className={`text-center`}><b>detail 4</b></td>
                                    <td className={`text-center`}>detail 4</td>
                                </tr>
                                <tr>
                                    <td className={`text-center`}><b>detail 5</b></td>
                                    <td className={`text-center`}>detail 5</td>
                                </tr>
                                <tr>
                                    <td className={`text-center`}><b>detail 6</b></td>
                                    <td className={`text-center`}>detail 6</td>
                                </tr>
                                <tr>
                                    <td className={`text-center`}><b>detail 7</b></td>
                                    <td className={`text-center`}>detail 7</td>
                                </tr>
                                <tr>
                                    <td className={`text-center`}><b>detail 8</b></td>
                                    <td className={`text-center`}>detail 8</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <hr />

            {/* RATING RELATED */}

            <Row className={`align-items-center justify-content-between`}>
                <Col md={6}>
                    <h2 className='my-3'>Ratings And Reviews</h2><span className={`fs-5 ${classes.reviewMark}`}>4&#9733;</span>
                    <span className={`text-secondary mx-2`}>12,543 ratings and 2,345 reviews</span>
                </Col>
                <Col md={6}>
                    {!ratingForm && <Button onClick={showRating_handler}>Rate Product</Button>}
                    {ratingForm && <Button onClick={() => setRatingForm(false)} variant="danger">Cancel Rating</Button>}
                </Col>
            </Row>

            {ratingForm && <RatingForm reviewSubmit={reviewSubmit_handler} />}

            <RatingList list={ratings} />
        </Col>
    )
}
export default React.memo(ProductText)