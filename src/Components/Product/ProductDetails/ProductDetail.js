import React, { useContext, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import MainImg from './MainImg';
import ProductAllImages from './ProductAllImages';
import classes from "./ProductDetail.module.css"
import ProductText from "./ProductText"
import { useParams, useLocation } from 'react-router-dom';
import ProductContext from '../../Store/product-context';

export default function ProductDetail() {
    const prdCtx = useContext(ProductContext);
    const path = useParams();
    const myLocation = useLocation();
    console.log(myLocation);

    const productIndex = prdCtx.findIndex((prd) => {
        return prd.id === path.productId
    })

    const allImg = [];
    for (let i = 0; i < prdCtx[productIndex].imageUrl.length; i++) {
        allImg.push(prdCtx[productIndex].imageUrl[i]);
    }

    const [mainImg, setMainImg] = useState(allImg[0]);

    const mainImg_handler = (img) => {
        setMainImg(img)
    }

    return (
        <React.Fragment>
            <Container fluid>
                <Row className={classes.detailsRow}>
                    <ProductAllImages images={allImg} imgChange={mainImg_handler} />
                    <MainImg img={mainImg} />
                    <ProductText details={prdCtx[productIndex]} />
                </Row>
            </Container>
        </React.Fragment>
    )
}
