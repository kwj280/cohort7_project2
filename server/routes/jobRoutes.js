const express = require('express')
const router = express.Router()

const jobsModel = require('../model/job')
const jobsJson = require('../db_seed/jobs.json')

//@test curl -X POST http://localhost:5000/job/create -H 'Content-Type: application/json' -d '{"title": "software developer", "description" : "develop things"}'
router.post('/post_jobs', async (req, res) => {
  let newJob = req.body
  console.log(newJob)
  try {
    let createdId = await jobsModel.CreateJob(newJob)
    console.log('Created new job:', createdId)
    res.sendStatus(200)
  } catch (error) {
    console.log('This is an error', error)
    res.sendStatus(500)
  }
})


router.post('/jobs/submit', async (req, res) => {
  let job = req.body
  // need to create CreateJob function for job postings
})

//return all the jobs
// router.get('/jobs', async (req, res) => {
//   let JobList = await jobsModel.getJobByJobId()
//   res.send(JobList)
// })
router.get('/api/jobs', async (req, res) => {
  let jobs = await jobsModel.getJobs()
  res.send(jobs)
  console.log(jobs)
})


router.get('/search/:query', async (req, res) => {
  console.log(req.params)
  let jobs = await jobsModel.jobModel.find({$or: [{ 'title': { $regex: `${req.params.query}`, $options: 'i' } },
                                                   { 'description': { $regex: `${req.params.query}`, $options: 'i' } }]})
  res.send(jobs)
})

router.get('/:id', async (req, res) => {
  let id = req.params.id
  let jobs = await jobsModel.getJobByJobId(id)
  res.send(jobs)
})
module.exports = router
