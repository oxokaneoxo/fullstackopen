import { useState, useEffect } from 'react';
import countryService from './services/countryService'
import Filter from './components/Filter';
import Countries from './components/Countries'
import Country from './components/Country';
import './app.css';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("")
  const [filteredCountries, setfilteredCountries] = useState([])

  useEffect(() => {
    countryService
      .getAllCountries()
      .then(response => {
        setCountries(response);
      })
  }, []);


  const showCountry = (country) => {
    setFilter(country.name.common)
  }

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} setfilteredCountries={setfilteredCountries} countries={countries}/>
      { filteredCountries.length === 1 
       ? <Country country={filteredCountries[0]} />
       : <Countries countries={filteredCountries} showCountry={showCountry}/>}
    </div>
  )
}

export default App