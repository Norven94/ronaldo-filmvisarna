import "../scss/BookingConfirmationPage.scss"

const ConfirmationTicket = (props) => {
    const { ticketDetails, showDetails } = props;
    console.log("ticketDetails: ", ticketDetails);
    console.log("showDetails: ", showDetails);

    const calculatePrice = (ticketType, price) => {
        if (ticketType === "Children") return price * 0.7 + "kr";
        if (ticketType === "Senior") return price * 0.8 + "kr";
        return price + "kr";
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 336 101.93" className="confirmationTicket">
            <defs>
            </defs>
            <g id="Layer_1-2" data-name="Layer 1">
                <path className="cls-1"
                    d="M327,0H98.76A15.23,15.23,0,0,1,86.47,6.22,15.23,15.23,0,0,1,74.18,0H9A9,9,0,0,1,0,9V92.89a9,9,0,0,1,9,9H74.17a15.26,15.26,0,0,1,24.6,0H327a9,9,0,0,1,9-9V9A9,9,0,0,1,327,0ZM86.47,93.71A2.53,2.53,0,1,1,89,91.18,2.53,2.53,0,0,1,86.47,93.71Zm0-8A2.53,2.53,0,1,1,89,83.13,2.53,2.53,0,0,1,86.47,85.66Zm0-8A2.53,2.53,0,1,1,89,75.13,2.53,2.53,0,0,1,86.47,77.66Zm0-8.11A2.53,2.53,0,1,1,89,67,2.53,2.53,0,0,1,86.47,69.55Zm0-8A2.53,2.53,0,1,1,89,59,2.53,2.53,0,0,1,86.47,61.55Zm0-8A2.53,2.53,0,1,1,89,51,2.53,2.53,0,0,1,86.47,53.55Zm0-8A2.53,2.53,0,1,1,89,43,2.53,2.53,0,0,1,86.47,45.55Zm0-8.22A2.53,2.53,0,1,1,89,34.8,2.53,2.53,0,0,1,86.47,37.33Zm0-8A2.53,2.53,0,1,1,89,26.8,2.53,2.53,0,0,1,86.47,29.33Zm0-8A2.53,2.53,0,1,1,89,18.8,2.53,2.53,0,0,1,86.47,21.33Zm0-8A2.53,2.53,0,1,1,89,10.8,2.53,2.53,0,0,1,86.47,13.33Z" />
                <text className="cls-15" transform="translate(12 45)">
                    <tspan className="cls-10" x="30" text-anchor="middle">{ticketDetails.ticketType}</tspan>
                    <tspan className="cls-18" x="30" y="17" text-anchor="middle">{calculatePrice(ticketDetails.ticketType, showDetails.movieId.price)}</tspan>
                </text>
                <text className="cls-2" transform="translate(104.62 22.76)">
                    {showDetails.movieId.title}
                </text>
                <text className="cls-7" transform="translate(105.12 37.33)">
                    {showDetails.movieId.genre.join(", ")} / {showDetails.movieId.age}
                </text>
                <text className="cls-10" transform="translate(104.47 75.13)">
                    {showDetails.salonId.name}
                </text>
                <text className="cls-10" transform="translate(105.53 91.18)">
                    {showDetails.date} {showDetails.time}
                </text>
                <text className="cls-14" transform="translate(292.12 30)">
                    <tspan className="cls-15">Row</tspan>
                    <tspan className="cls-18" x="15" y="15.6" text-anchor="middle">
                        {ticketDetails.rowNumber}
                    </tspan>
                </text>
                <text className="cls-14" transform="translate(292.12 65)">
                    <tspan className="cls-15">Seat</tspan>
                    <tspan className="cls-18" x="15" y="15.6" text-anchor="middle">
                        {ticketDetails.seatNumber}
                    </tspan>
                </text>
            </g>
        </svg>
    );
}

export default ConfirmationTicket;