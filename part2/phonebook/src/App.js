import { useState } from 'react'
import './app.css';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "040-1234567", id: "Arto Hellas" },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 'Ada Lovelace' },
    { name: 'Dan Abramov', number: '12-43-234345', id: "Dan Abramov" },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: "Mary Poppendieck" }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleNameInputChange = (event) => {
    setNewName(event.target.value)
  };
  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value)
  };
  const handleFilterInput = (event) => {
    setNewFilter(event.target.value)
  };

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      id: newName,
      number: newNumber
    };

    if (persons.some((e) => e.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber('');
    };
  };

  const personsToShow = newFilter.length <= 0
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with
          <input value={newFilter} onChange={handleFilterInput} />
        </div>
      </form>
      <h2>Add a new</h2>
      <form>
        <div>
          name:
          <input value={newName} onChange={handleNameInputChange} />
        </div>
        <div>
          Number:
          <input value={newNumber} onChange={handleNumberInputChange} />
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) =>
          <li key={person.id}>{person.name} {person.number}</li>
        )}
      </ul>
    </div>
  )
};

export default App