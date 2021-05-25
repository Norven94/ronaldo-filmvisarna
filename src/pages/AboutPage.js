import '../scss/AboutPage.scss' ;
import map from '../assets/filmvisarna-adress.png';

const AboutPage = () => {
    return ( 
        <div className="aboutContainer">
            <div className="aboutInfo-1">
                <h1>Filmvisarna AB</h1>
                <h3>About us</h3>
                <p> At our web site you will find offers and tickets to hundreds of films and cinemas all over Sweden.
                Cinema visitors get access to a much larger and more varied selection than ever before. We started the
                site because we want more people to discover the diversity, commitment and quality of the country's independent cinemas.</p><br />

                <p>We like all kinds of movies. It's great to just disappear into a grand adventure where it is clear who is the hero and who 
                is the villain, only to step out into everyday life again after the film and discover that it is the same. But sometimes even 
                ingrained notions need to be shaken - so that the reality you step into after the film in a strange way differs from the reality
                you were in before.</p>
            </div>

            <div className="aboutInfo-2">
                <div className="openingHours" >
                    <h4>Opening hours</h4>
                    <p>Monday - Thursday</p>
                    <p>12:00 - 23:00</p>
                    <br></br>
                    <p>Friday - Sunday</p>
                    <p>11:00 - 01:00</p>
                </div>

                <div className="contactAdressFlexcontainer">
                    <div className="contact" >
                        <h4>Contact</h4>
                        <p>info@filmvisarnaab.com</p>
                        <p>040-12 34 45</p>
                    </div>


                    <div className="adress">
                        <h4>Adress</h4>
                        <p>Filmgatan 1, 21 980 Filmstaden</p>
                    </div>
                </div>
            </div>

            <div className="aboutInfo-3">
                <img  className="map" src={map} alt="map" />
            </div>
            
        </div>
     );
}
 
export default AboutPage;