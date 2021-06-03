import "../scss/BookingConfirmationPage.scss"

const ConfirmationTicketSmall = (props) => {
    const { ticketDetails, showDetails, calculatePrice } = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.53 101.93" className="confirmationTicketSmall">
            <defs></defs>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path className="cls-1"
                        d="M247,18.8a2.53,2.53,0,0,0,2.53,2.53v2.94a2.53,2.53,0,0,0,0,5.06v2.94a2.53,2.53,0,0,0,0,5.06v3.16a2.53,2.53,0,0,0,0,5.06v2.94a2.53,2.53,0,0,0,0,5.06v2.94a2.53,2.53,0,0,0,0,5.06v2.94a2.53,2.53,0,1,0,0,5.06v3a2.53,2.53,0,1,0,0,5.06V80.6a2.53,2.53,0,1,0,0,5.06v3a2.53,2.53,0,0,0-1.7,4.4,9,9,0,0,0-7.33,8.88H9A9,9,0,0,0,1.7,93.05a2.51,2.51,0,0,0,.83-1.87A2.53,2.53,0,0,0,0,88.65v-3a2.53,2.53,0,0,0,2.53-2.53A2.53,2.53,0,0,0,0,80.6V77.66a2.53,2.53,0,0,0,2.53-2.53A2.53,2.53,0,0,0,0,72.6v-3a2.53,2.53,0,0,0,0-5.06V61.55a2.53,2.53,0,1,0,0-5.06V53.55a2.53,2.53,0,1,0,0-5.06V45.55a2.53,2.53,0,1,0,0-5.06V37.33A2.53,2.53,0,0,0,2.53,34.8,2.53,2.53,0,0,0,0,32.27V29.33A2.53,2.53,0,0,0,2.53,26.8,2.53,2.53,0,0,0,0,24.27V21.33A2.53,2.53,0,0,0,2.53,18.8,2.53,2.53,0,0,0,0,16.27V13.33A2.53,2.53,0,0,0,2.53,10.8a2.51,2.51,0,0,0-.88-1.91A9.05,9.05,0,0,0,9,0H240.5a9,9,0,0,0,7.38,8.89,2.52,2.52,0,0,0,1.65,4.44v2.94A2.54,2.54,0,0,0,247,18.8Z" />
                    <text className="cls-2" transform="translate(18.15 22.76)">
                        <tspan className="cls-3">{showDetails.movieId.title}</tspan>
                    </text>
                    <text className="cls-7" transform="translate(18.65 35.33)">
                        <tspan className="cls-8">{showDetails.movieId.genre.join(", ")} / {showDetails.movieId.age}</tspan>
                    </text>
                    <text className="cls-10" transform="translate(18 75.13)">
                        <tspan className="cls-11">{showDetails.salonId.name}</tspan>
                    </text>
                    <text className="cls-10" transform="translate(19.06 91.18)">
                        {showDetails.date} {showDetails.time}
                    </text>
                    <text className="cls-10" transform="translate(207.98 75.13)">
                        <tspan className="cls-14">Seat</tspan>
                        <tspan x="12" y="15" className="cls-16" textAnchor="middle">{ticketDetails.seatNumber}</tspan>
                    </text>
                    <text className="cls-10" transform="translate(207.21 42.08)">
                        <tspan className="cls-17">Row</tspan>
                        <tspan className="cls-16" x="12" y="15" textAnchor="middle">{ticketDetails.rowNumber}</tspan>
                    </text>
                    <text className="cls-10" transform="translate(18.18 50.67)">
                        <tspan className="cls-17">{ticketDetails.ticketType}: </tspan>
                        <tspan className="cls-16">{calculatePrice(ticketDetails.ticketType, showDetails.movieId.price)}</tspan>
                    </text>
                </g>
            </g>
        </svg>
    );
}

export default ConfirmationTicketSmall;