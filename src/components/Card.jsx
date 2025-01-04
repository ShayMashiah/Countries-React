import '../assets/css/common.css';
import {Link} from 'react-router-dom';
import CountryFlag from './CountryFlag';
import CountryInfo from './CountryInfo.jsx';

const Card = (country) => {
  return (
            <Link to={`/details/${country.name}`}
            key={country.name}  
            className="country"> 

            <CountryFlag flag={country.flag} name={country.name} />
        
            <CountryInfo name={country.name} population={country.population} region={country.region} capital={country.capital} />
        
            </Link>
  );
};

export default Card;
