import React from 'react'

const Countries = ({ countries, showCountry }) => {
  return (
    <ul>
      {countries.length >= 10
        ? <p>Too many matches, specify another filter</p>
        : countries.map((country) => <li key={country.name.common}>
          {country.name.common}
          <button onClick={() => showCountry(country)}>Show</button>
        </li>)
      }
    </ul>
  )
}

export default Countries