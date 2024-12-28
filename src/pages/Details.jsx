import '../assets/css/details.css';
import '../assets/css/main.css';
import Header from "../components/Header";
import CountryFlag from '../components/CountryFlag';
import CountryInfo from '../components/CountryInfo';
import countriesData from '../assets/CountriesData.json';
import { useParams, Link } from 'react-router-dom';

const Details = () => {
    const { countryName } = useParams();
    const country = countriesData.find((c) => c.name === countryName); 

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
