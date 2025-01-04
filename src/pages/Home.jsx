import Header from "../components/Header";
import Card from "../components/Card";
import { useState, useEffect } from 'react';


const Home = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all");
                const countries = await response.json();
                const formattedCountries = countries.map((country) => ({
                    name: country.name.common,
                    region: country.region,
                    flag: country.flags.svg,
                    population: country.population,
                    capital: country.capital ? country.capital[0] : "N/A",
                }));
                setData(formattedCountries);
                setFilteredData(formattedCountries);
            } catch (error) {
                console.error("Failed to fetch countries data:", error);
            }
        };

        fetchCountries();
    }, []);

    const handleSearchChange = (e) => {
        const text = e.target.value;
        setFilteredData(data.filter((country) =>
            country.name.toLowerCase().includes(text.toLowerCase())
        ));
    };

    const dropDownListClicked = () => {
        setIsDropdownOpen((prev) => !prev);
    };
    

    const handleRegionFilter = (region) => {
        if (region === 'All') {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter((country) => country.region === region));
        }
        setSelectedRegion(region);
    };

    return (
        <>
        <Header />
        <section className="filters">
            <div className="container">
                <div className="search-wrapper">
                    <i className="search-icon"></i>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for a country..."
                        onChange={handleSearchChange}
                    />
                </div>

            <div className={`dropdown-wrapper ${isDropdownOpen ? "open" : ""}`} onClick={dropDownListClicked}>
                <div className="dropdown-header flex flex-jc-sb flex-ai-c">
                        <span className="filter-by-region-txt">{selectedRegion}</span>
                        <i className="fa-regular fa-chevron-down icon"></i>
                    </div>
                    <div className="dropdown-body">
                        <ul>
                            <li onClick={() => handleRegionFilter('All')}>All</li>
                            <li onClick={() => handleRegionFilter('Africa')}>Africa</li>
                            <li onClick={() => handleRegionFilter('Americas')}>America</li>
                            <li onClick={() => handleRegionFilter('Asia')}>Asia</li>
                            <li onClick={() => handleRegionFilter('Europe')}>Europe</li>
                            <li onClick={() => handleRegionFilter('Oceania')}>Oceania</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
        <div className="container">
            <div className="countries-grid">
                {filteredData.map((country) => (
                    <Card
                        key={country.name}
                        {...country}
                    />
                ))}
            </div>
        </div>
        </>
    );
};

export default Home;
