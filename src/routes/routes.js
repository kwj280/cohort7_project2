const express = require('express')
const userModel = require('../model/models')
const app = express()

// app.get('/express_backend', (req, res) => {

//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
// })

// create a GET route
app.get('/users', async (req, res) => {
  const users = await userModel.find({})

  try {
    res.send(users)
  } catch (error) {
    res.status(500).send(error)
  }
})

// create a POST route
app.post('/add_user', async (req, res) => {
  const user = new userModel(req.body)

  try {
    await user.save()
    res.send(user)
  } catch (error) {
    re.status(500).send(error)
  }
})

module.exports = app
