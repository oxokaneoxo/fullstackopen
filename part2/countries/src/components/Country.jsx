import React from 'react'

const Country = ({ country }) => {
  return (
    <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital[0]}</p>
        <p>Area: {country.area}</p>
        <h2>Languages</h2>
        <ul>
          {Object.keys(country.languages).map((keyName, i) => (
            <li key={i}>{country.languages[keyName]}</li>)
          )}
        </ul>
        <img
          style={{width: '400px'}}
          src={country.flags.svg} 
          alt={country.flags.alt}
        />
    </div>
  )
}

export default Country