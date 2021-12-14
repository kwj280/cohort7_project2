const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const dotenv = require('dotenv')
const cors = require('cors')
const userRouter = require('./routes/userRoutes')
const profileRouter = require('./routes/profileRoutes')
const jobRouter = require('./routes/jobRoutes')
const authRoutes = require('./routes/auth')

const jobData = require('./db_seed/jobs.json')
const app = express()
const session = require("express-session")
const bodyParser = require("body-parser")
const passport = require('passport')


dotenv.config()
const port = process.env.PORT || 5000

//server config
app.use(session({ secret: "cats" }));
app.use(express.json({limit: '10mb'}))
app.use(bodyParser.urlencoded({ extended: false, limit:'10mb' }));
app.use(passport.initialize());
app.use(passport.session());


// app.use(cors())
app.use('/job', jobRouter)
app.use('/profile', profileRouter)
<<<<<<< HEAD
app.use('/auth', authRoutes)
=======
app.use('/user', userRouter)

app.get('/api/jobs', (req, res) => {
  console.log(jobData)
  res.status(200).json(jobData)
  
  
})
app.get('/ping', (req, res) => {
  res.status(200).json({ success:true })
});


app.use('/', express.static('../client/build'))
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname,"../client/build","index.html"))
})


>>>>>>> ce8fc18d75dc1cb0cd5cbf2ee1b4ec8ce5ea168f




// DB config
mongoose.connect(process.env.connection_url || 'mongodb://localhost:27017/techConnect', {
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



// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)) //Line 6
