import { React, useState } from 'react';
import '../shopPage.css';
import { Navbar, Nav, Form, FormCheck} from 'react-bootstrap';

function SideFilter(props) {
    const [productState] = useState(["Laptops","Desktops","Monitor","Keyboard","Mice","Accessories"])
    const [brandState] = useState(["Acer", "Apple","Asus","Dell","HP","Lenovo", "Logitech"])

    const handleCheckChange = (product, filter, updateFilter) => {
        let productIndex = filter.indexOf(product)
        if (productIndex === -1){
            updateFilter([...filter, product])
        }
        else{
            let tempArray = [...filter]
            tempArray.splice(productIndex, 1)
            updateFilter([...tempArray])
        }
    }

    return (
        <> 
            <Navbar bg="dark" variant="light" expand="sm">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex-column">
                    <Form>
                        <Form.Group controlId="products">
                            <Form.Label>Products</Form.Label>
                            {productState.map((product)=>{
                            return(<Form.Check key={product} onChange={() => handleCheckChange(product, props.productFilter, props.setProductFilter)}  type="checkbox" label={product} />)
                            })}
                        </Form.Group>
                        <Form.Group controlId="brands">
                            <Form.Label>Brands</Form.Label>
                            {brandState.map((brand)=>{
                            return(<Form.Check key={brand} onChange={() => handleCheckChange(brand, props.brandFilter, props.setBrandFilter)} type="checkbox" label={brand} />)
                            })}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                className="mb-1"
                                type="number"
                                onChange={(e) => {props.setPriceMinFilter(e.target.value)}}
                                style={{width:"100px"}}
                                size="sm"
                                id="minPrice"
                                placeholder="Min"
                            />
                            <Form.Control
                                className="mb-1"
                                type="number"
                                onChange={(e) => {props.setPriceMaxFilter(e.target.value)}}
                                style={{width:"100px"}}
                                size="sm"
                                id="maxPrice"
                                placeholder="Max"
                            />
                        </Form.Group>
                        <Form.Group controlId="brands">
                            <Form.Label>Brands</Form.Label>
                            <FormCheck onChange={() => handleCheckChange(5, props.ratingFilter, props.setRatingFilter)} type="checkbox" label="★★★★★" />
                            <FormCheck onChange={() => handleCheckChange(4, props.ratingFilter, props.setRatingFilter)} type="checkbox" label="★★★★☆" />
                            <FormCheck onChange={() => handleCheckChange(3, props.ratingFilter, props.setRatingFilter)} type="checkbox" label="★★★☆☆" />
                            <FormCheck onChange={() => handleCheckChange(2, props.ratingFilter, props.setRatingFilter)} type="checkbox" label="★★☆☆☆" />
                            <FormCheck onChange={() => handleCheckChange(1, props.ratingFilter, props.setRatingFilter)} type="checkbox" label="★☆☆☆☆" />
                        </Form.Group>
                    </Form>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default SideFilter;