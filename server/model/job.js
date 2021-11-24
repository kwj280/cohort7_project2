const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, ' Please enter job title'],
  },
  description: {
    type: String,
    trim: true,
    required: [false, ' Please enter job description'],
  },
  skills: {
    type: [String],
    required: false,
    message: 'Please enter applicable skills',
  },
  
  company: {
    type: String,
    trim: true,
    required: [false, 'Please enter company name'],
  },
  availability: {
    type: Boolean,
    required: false,
  },
  expiryDate: {
    type: String,
    required: false,
  },
  link: {
    type: String,
  },

  timestamps: {
    type: Date,
  },
})

const jobModel = mongoose.model('Job', jobSchema)



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
  let Job = new jobModel(jobInfo)
  console.log('job: ', Job)
  try {
    await Job.save()
    return job._id
  } catch (error) {
    console.error(error)
    return false
  }
}
// get job object from db
//getJob by Job id
const getJobByJobId = async (job_id) => {
  return true
}


//get Jobs by user id
const getJobsByUserId = async (user_id) => {
  return true
}

// get Jobs by search query this using 3rd party API

const getJobs = async (user_id) => {
  return true
}

// update Jobs
const updateJob = async (updatedJob) => {
  return true
}

// delete Jobs
const deleteJob = async (job_id) => {
  return true
}

// getJobById return a single job
const getJobById = async (job_id) => {
  return jobModel.findById(job_id)
}

module.exports = {
  getJobByJobId,
  getJobById,
  getJobsByUserId,
  getJobs,
  updateJob,
  deleteJob,
  jobModel,
  addJob,
}
