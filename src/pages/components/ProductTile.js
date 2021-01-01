import { React, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useBasket, useBasketUpdate } from '../../context/BasketContext';
import './productTile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function ProductTile(product) {
    const basket = useBasket()
    const updateBasket = useBasketUpdate()
    const [productState] = useState(product.product)
    
    const addToCart = (product) => {
        updateBasket([...basket, product])
    }

    //https://stackoverflow.com/questions/38001569/possible-to-multiply-or-concat-jsx
    let stars = ""
    for(let i=0;i<5;i++){
        if(i < productState.rating){
            stars += "★";
        }
        else{
            stars += "☆";
        }
    }
    return (
        <>
        <div id="productCard">
        <Card>
            <Card.Body>
                <Link to={`/product/${productState.title}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <Card.Img variant="top" src={productState.image} />
                    <Card.Title>{productState.title}</Card.Title>
                    <Card.Subtitle>{productState.brand}</Card.Subtitle>
                    <div>${productState.price}</div>
                    <div>{stars}</div>
                </Link>
                <Button onClick={() => {addToCart(productState.title)}} variant="dark">Add To Cart</Button>
            </Card.Body>
        </Card>
        </div>
        </>
    )
}

export default ProductTile;
