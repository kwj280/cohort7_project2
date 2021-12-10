const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const dotenv = require('dotenv')
const cors = require('cors')
const userRouter = require('./routes/userRoutes')
const profileRouter = require('./routes/profileRoutes')
const jobRouter = require('./routes/jobRoutes')
const jobData = require('./db_seed/jobs.json')
const app = express()
const session = require("express-session")
const bodyParser = require("body-parser")
const passport = require('passport')


dotenv.config()
const port = process.env.PORT || 5000

//server config
// app.use(cors())

app.use(session({ secret: "cats" }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
app.use(passport.initialize());
app.use(passport.session());

app.get('/ping', (req, res) => {
  res.status(200).json({ success:true })
});
app.use('/user', userRouter)
app.get('/api/jobs', (req, res) => {
  console.log('Hello')
  res.status(200).json(jobData)
})
app.use('/job', jobRouter)
app.use('/profile', profileRouter)
app.use('/', express.static('../build'))
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname,"../build","index.html"))
})

app.listen(port, () => console.log(`Listening on port ${port}`)) //Line 6
//kobkpG4XntTJKHgu


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
