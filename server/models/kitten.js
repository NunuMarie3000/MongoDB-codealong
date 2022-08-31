const mongoose = require('mongoose')

// const kittenSchema = new mongoose.Schema({
//   kittenName: 'string', 
//   color: 'string', 
//   age: 'string'
// })

// this is a schema
const kittenSchema = new mongoose.Schema({
  kittenName: String, 
  color: String, 
  age: Number
})

// this is how we make a model of the schema
const kittenModel = mongoose.model('Kitten', kittenSchema)

module.exports = kittenModel