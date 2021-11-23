const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema(
  { title: {
    type: String,
    trim: true,
    required:[true,' Please enter job title'],
  },
  description: {
    type: String,
    trim: true,
    required:[true,' Please enter job description'],
  },
  skills: {
    type: [String],
    required: true,
  },
  message: "Please enter applicable skills",
  company: {
    type: String,
    trim: true,
    required: [true, "Please enter company name"],
  },
  availability: {
    type: String,
    required: true,
  },
  expiryDate: {
    type: String,
    required: true,
  },
  link: {
    type: [email,company_site],
    required: true,
  },
 
  
timestamps: {
   type: Date
  },

  })

const jobModel = mongoose.model("Job", jobSchema)
  
export default jobModel


  
  

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
