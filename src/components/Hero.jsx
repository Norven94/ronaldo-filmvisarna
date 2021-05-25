import "../scss/Hero.scss";
import Carousel from 'react-bootstrap/Carousel';

import theDeparted from "../assets/hero-images/the-departed.jpg";
import theIntouchables from "../assets/hero-images/the-intouchables.jpg";
import theMatrix from "../assets/hero-images/the-matrix.jpg";

const Hero = (props) => {
    // receive props from parent Home component for movie data
    
    let theDepartedData = props.data[6];
    let theIntouchablesData = props.data[17];
    let theMatrixData = props.data[1];

    
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
                        <h2> {theDepartedData.title} </h2>
                        <span> {theDepartedData.genre[0]},  </span>
                        <span> {theDepartedData.genre[1]},  </span>
                        <span> {theDepartedData.genre[2]} / </span>
                        <span> {theDepartedData.timeLength} min / </span>
                        <span> {theDepartedData.price} kr </span>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item className="carouselItem">
                    <img
                    className="carouselImage"
                    src={theIntouchables}
                    alt="Second slide"
                    />
                    <Carousel.Caption className="carouselCaption">
                        <h2> {theIntouchablesData.title} </h2>
                        <span> {theIntouchablesData.genre[0]}, </span>
                        <span> {theIntouchablesData.genre[1]}, </span>
                        <span> {theIntouchablesData.genre[2]} / </span>
                        <span> {theIntouchablesData.timeLength} min / </span>
                        <span> {theIntouchablesData.price} kr </span>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className="carouselItem">
                    <img
                    className="carouselImage"
                    src={theMatrix}
                    alt="Third slide"
                    />
                    <Carousel.Caption className="carouselCaption">
                        <h2> {theMatrixData.title} </h2>
                        <span> {theMatrixData.genre[0]}, </span>
                        <span> {theMatrixData.genre[1]} / </span>
                        <span> {theMatrixData.timeLength} min / </span>
                        <span> {theMatrixData.price} kr </span>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Hero;