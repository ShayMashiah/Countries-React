const CountryFlag = (country) => {
    return (
        <div className="country-flag">
            <img src={country.flag} alt={country.name} />
        </div>
    );
}

export default CountryFlag;