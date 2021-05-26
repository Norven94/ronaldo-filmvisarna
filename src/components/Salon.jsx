import { useState, useEffect, useContext } from "react"
import { BookingContext } from "../context/BookingContext";
import "../scss/Salon.scss";

export default function Salon(props) {
    const { seatingMap, makeSeatingMap, selected, setSelected, booked } = useContext(BookingContext);    

    useEffect(() => {
        //Temporary, this should be props.salonId later on that should be send down from booking page
        let salonId = "60a65887fbb2a56a9a327a82";
        makeSeatingMap(salonId);
    }, []);    

    // Functions to select and deselect multiple seats 
    const selectSeat = (row, seatNumber) => {
        let selectedSeats = {
            row,
            seatNumber,
        };

        setSelected([...selected, selectedSeats]);
        console.log(selected)
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
                                    <p className="seat taken">
                                        {seat.row}/{seat.seatNumber}
                                    </p>
                                );
                            }
                            else if (selected.find(s => s.seatNumber === seat.seatNumber)) {
                                return (
                                    <p className="seat selected" onClick={() => deselectSeat(seat.seatNumber)}>
                                        {seat.row}/{seat.seatNumber}
                                    </p>
                                );
                            }
                            else {
                                return (
                                    <p className="seat" onClick={() => selectSeat(seat.row, seat.seatNumber)}>
                                        {seat.row}/{seat.seatNumber}
                                    </p>
                                );
                            }
                        })}
                    </div>
                );
            })}
        </div>
    );
}