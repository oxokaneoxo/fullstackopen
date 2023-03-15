require('dotenv').config()
const express = require('express')
var morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

const app = express()

app.use(express.json())
app.use(express.static('build'))
app.use(cors())

morgan.token('postRequest', function (req, res) {
  if (req.method === 'POST') {
    return (JSON.stringify(req.body));
  }
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :postRequest'))

let persons = [

]

app.get('/api/persons', (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons)
  })
})

app.get('/info', (request, response) => {
  let currentDate = new Date
  response.send(`<p>Phonebook has info for ${persons.length} people</p> <p>${currentDate}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(note => note.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error =>next(error))
  
})

// const generateId = () => {
//   const maxId = persons.length > 0
//     ? Math.max(...persons.map(p => p.id))
//     : 0
//   return (maxId + 1);
// }

app.post('/api/persons', (request, response) => {
  const body = request.body;
  console.log("This is Request.Body", request.body);

  if (!body.name) {
    return response.status(400).json({
      error: 'name missing'
    })
  }
  if (!body.number) {
    return response.status(400).json({
      error: 'number missing'
    })
  }
  // Can ignore this for now.
  // if (persons.find(person => person.name.toLowerCase() === body.name.toLowerCase())) {
  //   return response.status(409).json({
  //     error: 'name must be unique'
  //   })
  // }

  const person = new Person({
   // id: generateId(),
    name: body.name,
    number: body.number,
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})