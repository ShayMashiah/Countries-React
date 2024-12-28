import Header from "../components/Header";
import Card from "../components/Card";
import { useState } from 'react';
import data from "../assets/CountriesData.json";


const Home = () => {
    const [filteredData, setFilteredData] = useState(data);
    
    
    const handleSearchChange = (e) => {
        const text = e.target.value;
        setFilteredData(data.filter((country) =>
            country.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
            )
        );         
    };
    

    const dropDownListClicked = () => {
        const dropDown = document.getElementsByClassName('dropdown-wrapper')[0];
        if (dropDown) {
            dropDown.classList.toggle('open');
        } else {
            console.error('Dropdown element not found');
        }
    };   

    const handleRegionFilter = (region) => {
        if (region == 'All') {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter((country) => country.region == region));
        }
        document.getElementsByClassName('filter-by-region-txt')[0].innerText = region;
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

                <div className="dropdown-wrapper" onClick={dropDownListClicked}>
                    <div className="dropdown-header flex flex-jc-sb flex-ai-c">
                        <span className="filter-by-region-txt">Filter by Region</span>
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
