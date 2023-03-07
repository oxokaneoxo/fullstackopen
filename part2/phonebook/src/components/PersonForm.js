import React from 'react'
import personSevice from '../services/personSevice';

const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, persons, setPersons }) => {
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
            alert(`${newName} is already added to the phonebook`)
        } else {
            personSevice
                .create(personObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('');
                    setNewNumber('');
                })
                .catch(error => {
                    console.log(error, "unable to add person to database");
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