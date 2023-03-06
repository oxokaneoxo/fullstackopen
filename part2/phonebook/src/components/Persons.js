import React from 'react'

const Persons = ({ persons, newFilter}) => {
    const personsToShow = newFilter.length <= 0
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <ul>
        {personsToShow.map((person) =>
          <li key={person.id}>{person.name} {person.number}</li>
        )}
      </ul>
  )
}

export default Persons