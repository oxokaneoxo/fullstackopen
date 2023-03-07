import React from 'react'
import personSevice from '../services/personSevice';


const Persons = ({ persons, newFilter, setPersons }) => {
  const personsToShow = newFilter.length <= 0
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const removePerson = (id) => {
    if (window.confirm("Do you want to delete ", id)) {
      personSevice
        .remove(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id))
        })
        .catch(error => console.log(error, "Was unable to delete from database"))
    }
  }

  return (
    <ul>
      {personsToShow.map((person) =>
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={() => removePerson(person.id)}>Delete</button>
        </li>
      )}
    </ul>
  )
}

export default Persons