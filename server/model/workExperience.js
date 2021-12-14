//profile schema

const mongoose = require('mongoose')

const workExperienceSchema = new mongoose.Schema({
  profile_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true
  },
  dateFrom: {
    type: Date,
  },
  dateTo: {
    type: Date,
  },
  present: {
    type: Boolean,
  },
  title: {
    type: String,
  },
  company: {
    type: String,
  },
  description: {
    type: String,
  },
})

const workExperienceModel = mongoose.model('WorkExperience', workExperienceSchema)


//create new workExperience
const createWorkExperience = async (profile_id, workExperienceObject) => {
  workExperienceObject.profile_id = profile_id;
  let workExperience = new workExperienceModel(workExperienceObject)
  try {
    await workExperience.save()
    return workExperience
  } catch (error) {
    console.error(error)
    return false
  }
}

//get work experiences by Profile id
const getByProfileId = async (profile_id) => {
  return workExperienceModel.find({ profile_id })
}


// // update Profile
// const updateProfile = (newProfile, callback) => {
//     profileModel.findByIdAndUpdate(newProfile._id, newProfile, {new : true }, (err, model)=>{
//       if(err){
//         console.error(err.message)
//         return false;
//       }
//       callback(model);
//     })
// }


// delete Profile
const deleteWorkExperience = async (id) => {
  console.log('deleting: ', id)
  let deleted = await workExperienceModel.deleteOne({_id: id})
  return deleted
}


module.exports = {
  createWorkExperience,
  getByProfileId,
  deleteWorkExperience
}