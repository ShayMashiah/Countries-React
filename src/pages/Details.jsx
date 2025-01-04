import '../assets/css/details.css';
import '../assets/css/main.css';
import Header from "../components/Header";
import CountryFlag from '../components/CountryFlag';
import CountryInfo from '../components/CountryInfo';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Details = () => {
    const { countryName } = useParams(); // Fetch country name from the URL params
    const [country, setCountry] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
                const data = await response.json();

                if (data && data.length > 0) {
                    const countryData = data[0];
                    // Format the country data to match the expected structure
                    setCountry({
                        name: countryData.name.common,
                        region: countryData.region,
                        flag: countryData.flags.svg,
                        population: countryData.population,
                        capital: countryData.capital ? countryData.capital[0] : "N/A",
                    });
                } else {
                    setError("Country not found");
                }
            } catch (err) {
                console.error("Error fetching country details:", err);
                setError("Failed to load country details");
            }
        };

        fetchCountry();
    }, [countryName]);

    if (error) {
        return (
            <>
                <Header />
                <div className="error-message">{error}</div>
                <div className="back-button">
                    <div className="container">
                        <Link to="/" className="btn btn-back btn-with-icon">
                            <i className="fa-solid fa-arrow-left"></i>
                            Back
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    if (!country) {
        return (
            <>
                <Header />
                <div className="error-message">Country data is not available.</div>
                <div className="back-button">
                    <div className="container">
                        <Link to="/" className="btn btn-back btn-with-icon">
                            <i className="fa-solid fa-arrow-left"></i>
                            Back
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="back-button">
                <div className="container">
                    <Link to="/" className="btn btn-back btn-with-icon">
                        <i className="fa-solid fa-arrow-left"></i>
                        Back
                    </Link>
                </div>
            </div>
            <main className="main">
                <div className="container">
                    <section className="country-details">
                        <CountryFlag flag={country.flag} name={country.name} />
                        <CountryInfo 
                            name={country.name} 
                            population={country.population} 
                            region={country.region} 
                            capital={country.capital} 
                        />
                    </section>
                </div>
            </main>
        </>
    );
};

export default Details;
