import { useState } from 'react'
import './app.css';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: "Arto Hellas1" }
  ])
  const [newName, setNewName] = useState('')

  const handleNameInputChange = (event) => {
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      id: newName + (persons.length + 1)
    }

    setPersons(persons.concat(nameObject));
    setNewName('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameInputChange} />
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
       {persons.map((person) => <li key={person.id}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App