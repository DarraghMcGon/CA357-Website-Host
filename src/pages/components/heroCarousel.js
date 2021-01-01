import React from 'react';
import './heroCarousel.css'
import HeroImage1 from '../../assets/Hero-Image-1.jpg'
import HeroImage2 from '../../assets/Hero-Image-2.jpg'
import HeroImage3 from '../../assets/Hero-Image-3.jpg'
import { Carousel, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeroCarousel() {
    return (
        <Carousel touch>
            <Carousel.Item>
                <Image
                className="d-block w-100"
                src={HeroImage1}
                alt="Up to 25% off laptops fro students"
                fluid
                />
                <Carousel.Caption>
                        <h3 style={{fontSize:"2.5vw"}}>Up to 25% Off</h3>
                        <h1 style={{fontSize:"5vw"}}>Laptops</h1>
                        <p style={{color:"grey", fontSize:"1vw"}}>Get up 25% off all Laptops and Notebooks for highschool and college students</p>
                        <Button variant="light" size="lg">Shop Now</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                className="d-block w-100"
                src={HeroImage2}
                alt="Second slide"
                fluid
                />
                <Carousel.Caption>
                        <h3 style={{fontSize:"2.5vw"}}>Up to 15% Off</h3>
                        <h1 style={{fontSize:"5vw"}}>Accessories</h1>
                        <p style={{color:"grey", fontSize:"1vw"}}>Get up 15% off all Accessories for highschool and college students</p>
                        <Button variant="light" size="lg">Shop Now</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                className="d-block w-100"
                src={HeroImage3}
                alt="Third slide"
                fluid
                />
                <Carousel.Caption>
                        <h3 style={{fontSize:"2.5vw"}}>Up to 40% Off</h3>
                        <h1 style={{fontSize:"5vw"}}>Gaming</h1>
                        <p style={{color:"grey", fontSize:"1vw"}}>Get up 40% off all gaming equipment </p>
                        <Button variant="light" size="lg">Shop Now</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default HeroCarousel;
