import { useState, useEffect } from "react"
import "../scss/Salon.scss";

export default function Salon() {
    const [rows] = useState([8, 5, 5, 6]);
    const [seatingMap, setSeatingMap] = useState([]);

    const [booked, setBooked] = useState([{ row: 2, seatNumber: 9 }, { row: 4, seatNumber: 24 }]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        makeSeatingMap();
    }, []);

    const makeSeatingMap = () => {
        let seatingMap = [];
        let currentSeatnumber = 1;

        for (let i = 0; i < rows.length; i++) {
            let row = []

            // make a loop for every row create a seat object
            for (let k = 0; k < rows[i]; k++) {
                let seat = {
                    row: i + 1,
                    seatNumber: currentSeatnumber
                }
                currentSeatnumber = currentSeatnumber + 1
                row.push(seat)
            }
            seatingMap.push(row)
        }

        setSeatingMap(seatingMap);
    };

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