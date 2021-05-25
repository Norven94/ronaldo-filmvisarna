import "../scss/Hero.scss";
import Carousel from 'react-bootstrap/Carousel';

import theDeparted from "../assets/hero-images/the-departed.jpg";
import theIntouchables from "../assets/hero-images/the-intouchables.jpg";
import theMatrix from "../assets/hero-images/the-matrix.jpg";

const Hero = (props) => {
    // receive props from parent Home component for movie data
    console.log(props.data[6].title);

    return(
        <div className="hero">
            <Carousel className="carouselWrapper" >
                <Carousel.Item className="carouselItem" >
                    <img
                    className="carouselImage"
                    src={theDeparted}
                    alt="First slide"
                    />
                    <Carousel.Caption className="carouselCaption">
                        {/* <h2>The Departed</h2> */}
                        <h2> {props.data[6].title} </h2>
                        <span> {props.data[6].genre} / </span>
                        <span> {props.data[6].timeLength} min / </span>
                        <span> {props.data[6].price} kr </span>

                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item className="carouselItem">
                    <img
                    className="carouselImage"
                    src={theIntouchables}
                    alt="Second slide"
                    />
                    <Carousel.Caption className="carouselCaption">
                        <h2>The Intouchables</h2>
                        <span>Genre / Length / Price </span>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carouselItem">
                    <img
                    className="carouselImage"
                    src={theMatrix}
                    alt="Third slide"
                    />
                    <Carousel.Caption className="carouselCaption">
                        <h2>The Matrix</h2>
                        <span>Genre / Length / Price </span>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Hero;