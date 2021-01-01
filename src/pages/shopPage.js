import { React, useState } from 'react';
import SideFilter from './components/sideFilter';
import { products } from '../data/ProductData';
import ProductTile from './components/ProductTile';
import { Container, Row, Col, CardColumns } from 'react-bootstrap';

// https://stackoverflow.com/questions/60482018/make-a-sidebar-from-react-bootstrap

function ShopPage() {
    const [productState] = useState(products)
    const [productFilter, setProductFilter] = useState([])
    const [brandFilter, setBrandFilter] = useState([])
    const [priceMinFilter, setPriceMinFilter] = useState("")
    const [priceMaxFilter, setPriceMaxFilter] = useState("")
    const [ratingFilter, setRatingFilter] = useState([])
    const filterProps = {
        productFilter,
        setProductFilter,
        brandFilter,
        setBrandFilter,
        priceMinFilter,
        setPriceMinFilter,
        priceMaxFilter,
        setPriceMaxFilter,
        ratingFilter,
        setRatingFilter
    }

    const filterCheck = (product) => {
        if (productFilter.length === 0 || productFilter.indexOf(product.type) !== -1){
            if (brandFilter.length === 0 || brandFilter.indexOf(product.brand) !== -1){
                if (ratingFilter.length === 0 || ratingFilter.indexOf(product.rating) !== -1){
                    if (priceMinFilter === "" || parseInt(priceMinFilter) <= product.price){
                        if (priceMaxFilter === "" || parseInt(priceMaxFilter) >= product.price){
                            return true
                        }
                    }
                }
            }
        }
        return false
    }

    return (
        <>
        <Container fluid>
            <Row xs={1}>
                <Col style={{backgroundColor: "#343A40"}} xs={12} sm={2} id="sidebar-container">
                    <SideFilter {...filterProps}/>
                </Col>
                <Col xs={0} sm={10} id="page-content-container">
                    <CardColumns style={{paddingTop: "10px"}}>
                    {productState.map((product) => {
                        return(
                            <div key={product.title}>
                            { filterCheck(product)
                                ? <ProductTile key={product.title} product={product} />
                                : null
                            }
                            </div>
                        );
                    })}
                    </CardColumns>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default ShopPage;
