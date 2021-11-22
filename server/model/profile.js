//profile schema

const mongoose = require('mongoose')


/*
-User_ID
-Profile Pic
-Skills
-Interests
-Resume/File -> brief summary
-Social media [Github, LinkedIn]
*/
const profileSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId, ref: 'User'
	},
    prfile_picture: {
      type: Buffer,
    },
    skills: {
      type: [String],
    },
    interest: {
      type: [String],
    },
    resume: {
      type: Buffer,
    },
    linkGit: {
      type: String,
    },
    linkLinkedIn: {
      type: String,
    },
  })

const profileModel = mongoose.model('Profile', profileSchema)


//create new Profile
const createProfile = async(profileInfo) => {
  console.log('profileInfo: ', profileInfo)
  let profile = new profileModel(profileInfo)
  console.log('profile: ', profile)
  try {
    await profile.save()
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

//get Profile by Profile id
const getProfileByProfileId = async(profile_id) => {
	return true
}

//get Profile by user id
const getProfileByUserId = async(user_id) => {
	return true
}

// update Profile
const updateProfile = async(newProfile) => {
	return true
}


// delete Profile
const deleteProfile = async(profile_id) => {
	return true
}


module.exports={
	createProfile,
	getProfileByProfileId,
	getProfileByUserId,
	updateProfile,
	deleteProfile
}