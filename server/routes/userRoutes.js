const express = require('express')
const { userModel, addUser, signIn, findByUserEmail, findById } = require('../model/user')
const router = express.Router()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

// // create a GET route
// app.get('/users', async (req, res) => {
//   const users = await userModel.find({})

//   try {
//     res.send(users)
//   } catch (error) {
//     res.status(500).send(error)
//   }
// })


// create a POST route
router.post('/add_user', async (req, res) => {
  let userInfo = req.body.inputs;

  if (await addUser(userInfo))
    res.status(200).send('Successful')
  else
    res.status(500).send('Failed')
})

router.post('/signIn', async (req, res) => {
  // console.log(req.user)
  let userInfo = req.body.inputs;
  let user = await signIn(userInfo)
  res.send(user)
})

router.post('/loggedInUser', async (req, res) => {  
  res.send(req.user)
})

router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.status(200).send(req.user)
  });

passport.use(new LocalStrategy(
  {usernameField:"email", passwordField:"password"},
  function (username, password, done) {
    findByUserEmail(username).then((user) => {
      if (!user || user.password !== password){
        return done(null, false, { message: 'user not found' })
      }

      return done(null, user)
    }).catch(done)
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  findById(id).then((user) => {
    if(!user){
      done(new Error('User not found'))
      return
    }
    done(null, user);
  }).catch(done)
});


module.exports = router
