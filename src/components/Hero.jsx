import "../scss/Hero.scss";

const Hero = () => {

    return(
        <div className="hero">

            <div className="heroContent">
                <h2>Movie title</h2>
                <span>Genre / </span>
                <span>Time / </span>
                <span>Price </span>


                <div className="showsAndTickets">
                    <p>Shows...</p>
                    <p>Tickets</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;