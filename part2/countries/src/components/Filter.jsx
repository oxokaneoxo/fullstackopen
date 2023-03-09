import React from 'react'
import { useEffect } from 'react';

const Filter = ({ filter, setFilter, setfilteredCountries, countries }) => {

  useEffect(() => {
    setfilteredCountries(countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase())))
  }, [filter, countries, setfilteredCountries]);

  const handleFilterInput = (event) => {
    setFilter(event.target.value)
  };

  return (
    <form>
      <div>
        filter shown with
        <input value={filter} onChange={handleFilterInput} />
      </div>
    </form>
  )
}

export default Filter