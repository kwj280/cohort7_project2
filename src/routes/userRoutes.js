const express = require('express')
const {userModel, addUser, signIn} = require('../model/user')
const app = express()


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
  let userInfo = req.body.inputs;
  if(await addUser(userInfo))
    res.status(200).send('Successful')
  else
    res.status(500).send('Failed')

})

app.post('/signIn', async (req, res) => {
  let userInfo = req.body.inputs;
  let user = await signIn(userInfo)
  res.send(user)
})



module.exports = app
