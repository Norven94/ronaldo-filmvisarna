import { useState, useEffect, useContext } from "react"
import { BookingContext } from "../context/BookingContext";
import { ShowContext } from "../context/ShowContext";
import "../scss/Salon.scss";
import SeatIcon from "../components/Seat";
import toast, { Toaster } from "react-hot-toast";

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
        }
        else {
            toast.error("Add more tickets before you can select specific seat");
        }     
    };

    const deselectSeat = (seatNumber) => {
        setSelected(selected.filter(s => {
            return s.seatNumber !== seatNumber
        }))
    }

    return (
        <div className="container">
            <Toaster />
            {seatingMap.map((row, i) => {
                return (
                    <div key={i} className="row">
                        {row.map((seat) => {                                
                            if (booked.find(b => b.seatNumber === seat.seatNumber)) {
                                return (
                                    <div className="seat taken">
                                        <SeatIcon />
                                    </div>
                                );
                            }
                            else if (selected.find(s => s.seatNumber === seat.seatNumber)) {
                                return (
                                    <div className="seat selected" onClick={() => deselectSeat(seat.seatNumber)}>
                                        <SeatIcon />
                                    </div>
                                );
                            }
                            else {
                                return (
                                    <div className="seat default" onClick={() => selectSeat(seat.row, seat.seatNumber)}>
                                        <SeatIcon />
                                    </div>
                                );
                            }
                        })}
                    </div>
                );
            }).reverse()}
        </div>
    );
}