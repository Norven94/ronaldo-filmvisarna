import { useContext, useEffect, useState } from 'react';
import { MovieContext } from "../context/MovieContext";
import "../scss/Filter.scss";

export default function Filter() {
    const { filterMovies, getAllMovies, allGenres } = useContext(MovieContext);
    const [price, setPrice] = useState(200);
    const [timeLength, setTimeLength] = useState(500);
    const [genre, setGenre] = useState([]);
    const [age, setAge] = useState("");
    const [language, setLanguage] = useState("");
    const [date, setDate] = useState("");
    const [searchString, setSearchString] = useState("");
    const [activateFilter, setActivateFilter] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);

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

    const handleDateChange = (e) => {
        setDate(e.target.value);
        setActivateFilter(true);
    }

    const handleSearchChange = (e) => {
        setSearchString(e.target.value);
        setActivateFilter(true);
    }

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
    }, [price, timeLength, genre, age, language, date, searchString])

    let formContent;
    if (filterOpen) {
        formContent = (
            <form>
                <label>Price</label>
                <input type="range" min="1" max="200" value={price} class="slider" onChange={handlePriceChange} />
                <label>Length</label>
                <input type="range" min="1" max="500" value={timeLength} class="slider" onChange={handleTimeChange} />                
                <label>Genre</label>
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
                            <label for={genre}>{genre}</label>
                        </div>
                    ))}
                </div>
                <div className="dropdowns-container">
                    <div className="dropdown">
                        <label>Age</label>
                        <select onChange={handleAgeChange}>
                            <option value="R">R</option>
                            <option value="PG-13">PG-13</option>
                            <option value="Approved">Approved</option>
                        </select>
                    </div>
                    <div className="dropdown">
                        <label>Language</label>
                        <select onChange={handleLanguageChange}>
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                        </select>
                    </div>
                </div>
                <label>Date</label>
                <button onClick={clearFilter}>Clear filter</button>
            </form>
        );
    } else {
        formContent = "";
    }

    return (
        <div className="filter">
            <input type="text" onChange={handleSearchChange} />
            <button className="openFilter" onClick={openFilter}>Filter</button>
            {formContent}
        </div>
    )
}