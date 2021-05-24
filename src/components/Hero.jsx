import "../scss/Hero.scss";
import Carousel from 'react-bootstrap/Carousel';

import theDeparted from "../assets/hero-images/the-departed.jpg";
import theIntouchables from "../assets/hero-images/the-intouchables.jpg";
import theMatrix from "../assets/hero-images/the-matrix.jpg";

const Hero = () => {

    return(
        <div className="hero">
            <Carousel className="carouselWrapper" >
                <Carousel.Item className="carouselItem" >
                    <img
                    className="carouselImage"
                    src={theDeparted}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>The Departed</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carouselImage"
                    src={theIntouchables}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>The Intouchables</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="carouselImage"
                    src={theMatrix}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>The Matrix</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Hero;