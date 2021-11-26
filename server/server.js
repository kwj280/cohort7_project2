const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/userRoutes')
const profileRouter = require('./routes/profileRoutes')
const jobRouter = require('./routes/jobRoutes')

const app = express()

const port = process.env.PORT || 5000

//server config
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//routers
app.use('/user', userRouter)
app.use('/job', jobRouter)
app.use('/profile', profileRouter)

mongoose.connect(
  'mongodb+srv://Techn0mancer_X:Epsilon_6@cluster0.zapao.mongodb.net/techConnect?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  },
)

//db connection
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function () {
  console.log('Connection Established')
})

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)) //Line 6
