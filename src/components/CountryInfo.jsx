const CountryInfo = (country) => {
    return (
        <div className="country-info">
          <h2 className="country-title">{country.name}</h2>
          <ul className="country-data-list">
            <li>
              <strong>Population:</strong> {country.population}
            </li>
            <li>
              <strong>Region:</strong> {country.region}
            </li>
            <li>
              <strong>Capital:</strong> {country.capital}
            </li>
          </ul>
        </div>

    );
}

export default CountryInfo;
