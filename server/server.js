const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const userRouter = require('./routes/userRoutes')
const profileRouter = require('./routes/profileRoutes')
const jobRouter = require('./routes/jobRoutes')
const jobData = require('./db_seed/jobs.json')
const app = express()
dotenv.config()
const port = 5000

//server config
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

console.log(process.env.connection_url)
// DB config
mongoose.connect(process.env.connection_url, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
})
//db connection
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function () {
  console.log('Connection Established')
})

//routers
app.use('/user', userRouter)
app.use('/job', jobRouter)
app.use('/profile', profileRouter)

// API endpoints

app.get('/api/jobs', (req, res) => {
  console.log('Hello')
  res.status(200).json(jobData)
})

s

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)) //Line 6
