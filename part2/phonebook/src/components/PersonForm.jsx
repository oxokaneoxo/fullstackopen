import React from 'react'
import personSevice from '../services/personSevice';

const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, persons, setPersons, setErrorMessage, setNotificationMessage }) => {
    const handleNameInputChange = (event) => {
        setNewName(event.target.value)
    };
    const handleNumberInputChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault();  
        const personObj = {name: newName , number: newNumber};
        const foundPerson = persons.find( person => person.name === newName);

        if (persons.some((e) => e.name === newName)) {
            if (window.confirm(`${newName} is already addded to phonebook, replace the old number with a new one?`)) {
                const changedPerson = {... foundPerson, number: newNumber}
                personSevice
                    .update(changedPerson.id, changedPerson)
                    .then((returnedPerson) => {
                        setPersons(persons.map((person) => (person.id !== changedPerson.id ? person : returnedPerson)))
                        setNewName('');
                        setNewNumber('');
                        setNotificationMessage(
                            `Person ${personObj.name} was updated`
                        )
                        setTimeout(() => {
                            setNotificationMessage(null)
                        }, 5000);
                    })
                    .catch((error) => {
                        setErrorMessage(
                            `Person ${personObj.name} was unable to be updated! Error code: ${error}`
                        )
                        setTimeout(() => {
                            setErrorMessage(null)
                        }, 5000);
                    })
            }
        } else {
            personSevice
                .create(personObj)
                .then(foundPerson => {
                    setPersons(persons.concat(foundPerson))
                    setNewName('');
                    setNewNumber('');
                    setNotificationMessage(
                        `Person ${personObj.name} was added`
                    )
                    setTimeout(() => {
                        setNotificationMessage(null)
                    }, 5000);
                })
                .catch((error) => {
                    setErrorMessage(
                        `Person ${personObj} was unable to be added! Error code: ${error}`
                    )
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 5000);
                })
        };
    };

    return (
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
                <button type="submit" onClick={addPerson}>add</button>
            </div>
        </form>
    )
}

export default PersonForm