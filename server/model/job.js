const mongoose = require('mongoose')

const Jobs = mongoose.model('Jobs', {
  
    jobTitle: {
      type: String,
    },
    jobDescription: {
      type: String,
    },
    skills: {
      type: [String],
    },
    company: {
      type: String,
    },
    availability: {
      type: String,
    },
    expiryDate: {
      type: String,
    },
    linkEmail: {
      type: [String],
    },
    linkCompanySite: {
      type: [String],
  },
    
  timestamps: {
     type: Date
    },
  
})

/*  
Job Title,
Job description
Skill,
Company,
Availability,
Expiry_Date,
Link[Company email, Company site]

*/





// create new job
const addJob = async (jobInfo) => {
  console.log('jobInfo: ', jobInfo)
  let Jobs = new jobModel(jobInfo)
  console.log('job: ', job)
  try {
    await Jobs.save()
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

//getJob by Job id
const getJobByJobId = async (job_id) => {
  return true
}

//get Profile by user id
const getJobByUserId = async (user_id) => {
  return true
}

// update Profile
const updateJob = async (newJob) => {
  return true
}

// delete Profile
const deleteJob = async (job_id) => {
  return true
}

module.exports = {
  getJobByJobId,
  getJobByUserId,
  updateJob,
  deleteJob,
  jobModel,
  addJob
}
