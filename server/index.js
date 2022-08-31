const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
require('dotenv').config()
const bodyParser = require('body-parser')
 
// create application/json parser
const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
// const urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// POST /login gets urlencoded bodies
const port = process.env.PORT
const home = require('./routes/homeRoute')
const kittens = require('./routes/kittensRoute')
const postKittens = require('./routes/postKittensRoute')

//we're gonna put mongoose/mongodb stuff in between requirements and routes
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(()=>console.log('connected to mongodb')).catch(err => console.log(err))


app.get('/', (req,res)=>{
  res.send({
    status: 200,
    message: 'Everything is okay!'
  })
})
app.use(jsonParser)
app.use(home)
app.use(kittens)
app.use(postKittens)



app.listen(port, ()=>console.log(`server up and running on port ${port}`))