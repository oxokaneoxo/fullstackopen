const mongoose = require('mongoose')

if (process.argv.length > 3 && process.argv.length < 5) {
  console.log('give password, name, and number as an argument. example: node mongo.js <password> <name> <number>')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://kanemiller:${password}@cluster0.d1hec5o.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('person', personSchema)

const person = new Person({
  name,
  number,
})
console.log()

process.argv.length === 3
  ? Person
    .find({})
    .then((people) => {
      console.log('Phonebook:')
      people.forEach((p) => {
        console.log(`Name: ${p.name} Number: ${p.number}`)
      })
      mongoose.connection.close()
    })
  : person.save().then(p => {
    console.log(`Person: ${p.name} was added to phonebook with the Number: ${p.number}`)
    mongoose.connection.close()
  })