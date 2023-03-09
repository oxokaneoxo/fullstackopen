import { useState, useEffect } from 'react';
import './app.css';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personSevice from './services/personSevice';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [notificationMessage, setNotificationMessage] = useState(null)
  

  useEffect(() => {
    personSevice
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => {
        setErrorMessage(
          `Unable to fetch database! Error code: ${error}`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000);
      })
  }, [])


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notificationMessage={notificationMessage} errorMessage={errorMessage} />
      <Filter
        newFilter={newFilter}
        setNewFilter={setNewFilter}
      />
      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        setErrorMessage={setErrorMessage}
        setNotificationMessage={setNotificationMessage}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        setPersons={setPersons}
        newFilter={newFilter}
        setErrorMessage={setErrorMessage}
        setNotificationMessage={setNotificationMessage}
      />
    </div>
  )
};

export default App