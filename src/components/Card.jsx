import '../assets/css/common.css';
import countriesData from '../assets/CountriesData.json';
import {Link} from 'react-router-dom';
import CountryFlag from './CountryFlag';
import CountryInfo from './CountryInfo.jsx';

const Card = () => {
  return (
<div className="container">
    <div className="countries-grid">
      {countriesData.map((country, index) => (
        
        <Link to={`/details/${country.name}`}
        key={index}  
        className="country"> 

        <CountryFlag flag={country.flag} name={country.name} />
        
        <CountryInfo name={country.name} population={country.population} region={country.region} capital={country.capital} />
        
        </Link>
      ))}
    </div>
    </div>
  );
};

export default Card;
