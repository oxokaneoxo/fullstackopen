import React from 'react'
import personSevice from '../services/personSevice';


const Persons = ({ persons, newFilter, setPersons, setErrorMessage, setNotificationMessage }) => {
  const personsToShow = newFilter.length <= 0
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const removePerson = (person) => {
    if (window.confirm(`Do you want to delete ${person.name}`)) {
      personSevice
        .remove(person.id)
        .then(() => {
          setPersons(persons.filter((p) => p.id !== person.id))
          setNotificationMessage(
            `Person ${person.name} was removed`
          )
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000);
        })
        .catch((error) => {
          setErrorMessage(
              `Imformation of ${person.name} has already been removed from server`
          )
          setTimeout(() => {
              setErrorMessage(null)
          }, 5000);
      })
    }
  }

  return (
    <ul>
      {personsToShow.map((person) =>
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={() => removePerson(person)}>Delete</button>
        </li>
      )}
    </ul>
  )
}

export default Persons