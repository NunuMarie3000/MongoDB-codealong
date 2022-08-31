const express = require('express')
const router = express.Router()
const Kitten = require('../models/kitten')


router.post('/kittens', async (req,res)=>{
  const newKitten = await Kitten.create(req.body)
  await newKitten.save()
  console.log(newKitten)
  res.send(newKitten)
})

module.exports = router