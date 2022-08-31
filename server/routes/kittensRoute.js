const express = require('express')
const router = express.Router()
const Kitten = require('../models/kitten')

let allKittensArr = [] // example that robert wanted...but pushing an array of objects from our database into this array...i decided to reset the value of this array every time a get request is made so i don't get duplicates from continually pushing db info into this array

const spike = new Kitten({
  kittenName: 'Spike',
  color: 'black',
  age: 1
})


router.get('/kittens', async (req,res)=>{
  // await spike.save()
  // search our database 
  // empty object is the parameter we passed in, so look for any kitten in an object in our database
  const allKittens = await Kitten.find({}).then((kittens)=> allKittensArr=[kittens]).catch((err)=>console.log(err))
  res.send(allKittensArr)
})

module.exports = router