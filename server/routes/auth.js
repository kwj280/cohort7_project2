const passport = require('passport')
const express = require('express')
const router = express.Router()


app.post('/signIn',
  passport.authenticate('local'), { successRedirect: '/', failureRedirect: '/signIn'},
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    console.log('Req.user is', req.user);
    res.sendStatus(200);
    res.redirect('/users/' + req.user.username);
  });

  module.exports = router;