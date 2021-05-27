import { useContext, useEffect, useState } from 'react';
import { MovieContext } from "../context/MovieContext";
import "../scss/Filter.scss";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Filter() {
    const { filterMovies, getAllMovies, allGenres, allLanguages, allAges } = useContext(MovieContext);
    const [price, setPrice] = useState(200);
    const [timeLength, setTimeLength] = useState(500);
    const [genre, setGenre] = useState([]);
    const [age, setAge] = useState("");
    const [language, setLanguage] = useState("");
    const [searchString, setSearchString] = useState("");
    const [activateFilter, setActivateFilter] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const [date, setDate] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [reset, setReset] = useState(false)

    const handlePriceChange = (e) => {
        setPrice(parseInt(e.target.value));
        setActivateFilter(true);
    }

    const handleTimeChange = (e) => {
        setTimeLength(parseInt(e.target.value));
        setActivateFilter(true);
    }

    const handleGenreChange = (e) => {
        if (genre.includes(e.target.value)) {
            setGenre(genre.filter(g => g !== e.target.value));
        }
        else {
            setGenre([...genre, e.target.value]);
        }
        setActivateFilter(true);
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value);
        setActivateFilter(true);
    }

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        setActivateFilter(true);
    }

    const handleSearchChange = (e) => {
        setSearchString(e.target.value);
        setActivateFilter(true);
    }

    const handleDateChange = (newDate) => {
        setDate(formatDate(newDate))
        setStartDate(newDate)
        setActivateFilter(true);
    }

    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    //eslint-disable-next-line
    const clearFilter = (e) => {
        e.preventDefault();
        setSearchString("");
        setDate("");
        setLanguage("");
        setAge("");
        setGenre([]);
        setTimeLength(500);
        setPrice(200);
        setActivateFilter(false);
        getAllMovies();
        setReset(true)
    }

    const openFilter = () => {
        setFilterOpen(!filterOpen)
    }

    useEffect(() => {
        if (activateFilter) {
            let settings = {
                price,
                timeLength,
                genre,
                age,
                language,
                date,
                searchString
            }
            console.log(settings);
            filterMovies(settings)
        }
        //eslint-disable-next-line
    }, [price, timeLength, genre, age, language, date, searchString])

    useEffect(() => {
        setReset(false)
    }, [clearFilter])

    let genreContent;
    if (reset) {
        genreContent = (
            <div className="genres-container">
                {allGenres.map((genre, i) => (
                    <div className="box" key={i}>
                        <input
                            id={genre}
                            value={genre}
                            type="checkbox"
                            onChange={handleGenreChange}
                            checked={false}
                        />
                        <span className="check"></span>
                        <label htmlFor={genre}>{genre}</label>
                    </div>
                ))}
            </div>
        )
    } else {
        genreContent = (
            <div className="genres-container">
                {allGenres.map((genre, i) => (
                    <div className="box" key={i}>
                        <input
                            id={genre}
                            value={genre}
                            type="checkbox"
                            onChange={handleGenreChange}
                        />
                        <span className="check"></span>
                        <label htmlFor={genre}>{genre}</label>
                    </div>
                ))}
            </div>
        )
    }

    let formContent;
    if (filterOpen) {
        formContent = (
            <form>
                <div className="range-container">
                    <label>Price</label>
                    <input type="range" min="1" max="200" value={price} className="slider" onChange={handlePriceChange} />
                    <span>{price}</span>
                    <label>Length</label>
                    <input type="range" min="1" max="400" value={timeLength} className="slider" onChange={handleTimeChange} />
                    <span>{timeLength}</span>
                </div>
                <div>
                    <label>Genre</label>
                    {genreContent}
                </div>
                <div>
                    <div className="dropdowns-container">
                        <div className="dropdown">
                            <label>Age</label>
                            <select onChange={handleAgeChange}>
                                {allAges.map((age, i) => (
                                    <option key={i} value={age}>{age}</option>
                                ))}
                            </select>
                        </div>
                        <div className="dropdown">
                            <label>Language</label>
                            <select onChange={handleLanguageChange}>
                                {allLanguages.map((language, i) => (
                                    <option key={i} value={language}>{language}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="datepicker-container">
                        <label>Date</label>
                        <DatePicker className="datepicker" selected={startDate} onChange={newDate => handleDateChange(newDate)} />
                    </div>
                    <button className="clearFilter" onClick={clearFilter}>Clear filter</button>
                </div>
            </form>
        );
    } else {
        formContent = "";
    }

    return (
        <div className="filter">
            <input type="text" onChange={handleSearchChange} />
            <button className="openFilter" onClick={openFilter}>Filter</button>
            <>
                {formContent}
            </>
        </div>
    )
}