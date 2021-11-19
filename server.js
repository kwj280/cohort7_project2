const express = require('express') 
const mongoose = require('mongoose')
const userRouter = require('./src/routes/userRoutes')


const app = express()
const port = process.env.PORT || 5000

//server config
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


//routers
app.use('/user', userRouter)
// app.use('/job', jobRouter)
// app.use('profile', profileRouter)



mongoose.connect('mongodb://localhost:27017/techConnect', {
  useNewUrlParser: true,
})


//db connection
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function () {
  console.log('Connection Established')
})



// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)) //Line 6
