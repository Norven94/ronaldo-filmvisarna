import { useState, useEffect, useContext } from "react"
import { BookingContext } from "../context/BookingContext";
import { ShowContext } from "../context/ShowContext";
import "../scss/Salon.scss";
import SeatIcon from "../components/Seat";

export default function Salon(props) {
    const { seatingMap, makeSeatingMap, selected, setSelected, booked, totalTickets, getBookedSeats } = useContext(BookingContext);    
    const { currentShow } = useContext(ShowContext);
    const [amountOfTickets, setAmountOfTickets] = useState(0)

    useEffect(() => {
        let salon;
        currentShow.map((show) => {
            if (show._id === props.showId) {
                console.log(show)
                salon = show.salonId._id
            }
            return;
        });
        makeSeatingMap(salon);
        getBookedSeats(props.showId)
    }, []);   
    
    useEffect(() => {
        let total = 0;
        for (let i = 0; i < totalTickets.length; i++) {
            total += totalTickets[i].quantity
        }   
        setAmountOfTickets(total)
    }, [totalTickets]);

    // Functions to select and deselect multiple seats 
    const selectSeat = (row, seatNumber) => {
        if (selected.length < amountOfTickets) {
            let selectedSeats = {
                row,
                seatNumber,
            };
    
            setSelected([...selected, selectedSeats]);
            console.log(selected)
        }
        else {
            alert("you need to add more seats to select more seats");
        }     
    };

    const deselectSeat = (seatNumber) => {
        setSelected(selected.filter(s => {
            return s.seatNumber !== seatNumber
        }))
    }

    return (
        <div className="container">
            {seatingMap.map((seating, i) => {
                return (
                    <div key={i} className="row">
                        {seating.map((seat) => {                                
                            if (booked.find(b => b.seatNumber === seat.seatNumber)) {
                                return (
                                    <div className="taken">
                                        <SeatIcon />
                                    </div>
                                );
                            }
                            else if (selected.find(s => s.seatNumber === seat.seatNumber)) {
                                return (
                                    <div className="selected">
                                        <SeatIcon onClick={() => deselectSeat(seat.seatNumber)}/>
                                    </div>
                                );
                            }
                            else {
                                return (
                                    <div className="default">
                                        <SeatIcon onClick={() => selectSeat(seat.row, seat.seatNumber)}/>
                                    </div>
                                );
                            }
                        })}
                    </div>
                );
            })}
        </div>
    );
}