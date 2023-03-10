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
        const personObject = {
            name: newName,
            id: newName,
            number: newNumber
        };

        if (persons.some((e) => e.name === newName)) {
            if (window.confirm(`${newName} is already addded to phonebook, replace the old number with a new one?`)) {
                const changedPerson = { ...personObject, number: newNumber }
                personSevice
                    .update(changedPerson.id, changedPerson)
                    .then((changedPerson) => {
                        setPersons(persons.map((person) => (person.id !== changedPerson.id ? person : changedPerson)))
                        setNewName('');
                        setNewNumber('');
                        setNotificationMessage(
                            `Person ${personObject.name} was updated`
                        )
                        setTimeout(() => {
                            setNotificationMessage(null)
                        }, 5000);
                    })
                    .catch((error) => {
                        setErrorMessage(
                            `Person ${personObject.name} was unable to be updated! Error code: ${error}`
                        )
                        setTimeout(() => {
                            setErrorMessage(null)
                        }, 5000);
                    })
            }
        } else {
            personSevice
                .create(personObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('');
                    setNewNumber('');
                    setNotificationMessage(
                        `Person ${personObject.name} was added`
                    )
                    setTimeout(() => {
                        setNotificationMessage(null)
                    }, 5000);
                })
                .catch((error) => {
                    setErrorMessage(
                        `Person ${personObject} was unable to be added! Error code: ${error}`
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