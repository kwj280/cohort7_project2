const express = require('express')
const {
    createProfile,
    getProfileByProfileId,
    getProfileByUserId,
    updateProfile,
    deleteProfile } = require('../model/profile')
    
const app = express()

let testProfileJson = {
    userId: '6195f25f0b944fa89fe45ca6',
    skills: ['C++', 'Javascript', 'Frontend dveleopemnt'],
    interest: ['Machine learnoing']
}






/* @auther: Woojae Kim
 create a new profile for user
  param: same as profile schema
  return: true if suceed false otherwise
*/
app.post('/create', async (req, res) => {

    createProfile(testProfileJson)
    return true;
})

/* @auther: Woojae Kim
 update existing profile 
  param: profile id to update
  return: true if suceed false otherwise
*/
app.post('/update/:profile_id', async (req, res) => {

    createProfile(testProfileJson)
    return true;
})


/* @auther: Woojae Kim
 get user profile using userId
  param: user id
  return: profile object
*/
app.get('/getByUserId/:userId', async (req, res) => {
    return true;
})

/* @auther: Brian
 get user profile using profileId
  param: profile id
  return: profile object
*/
app.get('/getByProfileId/:profileId', async (req, res) => {
    return true;
})


/* @auther: Brian
 delete profile
  param: profile id
return: true if suceed false otherwise

*/
app.delete('/:profile_id', async (req, res) => {
    return true;
})



module.exports = app