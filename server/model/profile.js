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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    profile_picture: {
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
const createProfile = async (profileInfo) => {
    let profile = new profileModel(profileInfo)
    try {
        await profile.save()
        return profile
    } catch (error) {
        console.error(error)
        return false
    }
}

//get Profile by Profile id
const getProfileByProfileId = async (profile_id) => {
    return profileModel.findById(profile_id)
}

//get Profile by user id
const getProfileByUserId = async (userId) => {
    return profileModel.findOne({ userId }).exec();
}

// update Profile
const updateProfile = (newProfile, callback) => {
    profileModel.findByIdAndUpdate(newProfile._id, newProfile, {new : true }, (err, model)=>{
      if(err){
        console.error(err.message)
        return false;
      }
      callback(model);
    })
}


// delete Profile
const deleteProfile = async (profile_id) => {
    return true
}


module.exports = {
    createProfile,
    getProfileByProfileId,
    getProfileByUserId,
    updateProfile,
    deleteProfile
}