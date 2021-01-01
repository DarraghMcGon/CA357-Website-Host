import {React, useState, useEffect} from 'react';
import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import { useBasket, useBasketUpdate } from '../context/BasketContext';
import { products } from '../data/ProductData';
import './productPage.css';

function ProductPage({ match }) {
    const [productState, setProductState] = useState();
    const basket = useBasket()
    const updateBasket = useBasketUpdate()

    const addToCart = (product) => {
        updateBasket([...basket, product])
    }

    useEffect(() => {
        products.forEach((product) => {
            if(product.title === match.params.product){
                setProductState(product)
            }
        });
    }, []);

    return (
        <>
        {productState 
            ? <Container fluid>
                 <Row>
                     <h1>{productState.brand}</h1>
                 </Row>
                 <Row>
                     <Col xs={12} md={6}>
                        <Image src={productState.image} fluid />
                     </Col>
                     <Col xs={12} md={6}>
                        <div class="product-description">
                            <h2> {productState.title} </h2>
                            <p>{productState.desc}</p>
                        </div>
                        <div class="product-price">
                            <p>€{productState.price}</p>
                        </div>
                        <div class="cart-btn">
                           <Button onClick={() => {addToCart(productState.title)}} variant="primary" size="lg">Add to cart</Button>
                        </div>
                     </Col>
                 </Row>
               </Container>
            : <div>Sorry could not find that</div>
        }
        </>
    )
}

export default ProductPage;