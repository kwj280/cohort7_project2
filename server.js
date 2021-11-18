const express = require('express') 
const mongoose = require('mongoose')
const userRouter = require('./src/routes/userRoutes')


const app = express()
const port = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/user', userRouter)

mongoose.connect('mongodb://localhost:27017/techConnect', {
  useNewUrlParser: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function () {
  console.log('Connection Established')
})



// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)) //Line 6
