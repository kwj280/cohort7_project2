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
    console.log("Created new job:", createdId)
    res.sendStatus(200)}
    catch (error) {
        console.log("This is an error", error)
        res.sendStatus(500)
    }
})

router.get('/:id', async (req, res) => {
  let id = req.params.id
  let jobs = await jobsModel.getJobByJobId(id)
  res.send(jobs)
})

router.post('/jobs/submit', async (req, res) => {
  let job = req.body
  // need to create CreateJob function for job postings
})

//return all the jobs
router.get('/jobs', async (req, res) => {
    res.send(jobsJson)
    console.log(jobsJson)
})

module.exports = router
