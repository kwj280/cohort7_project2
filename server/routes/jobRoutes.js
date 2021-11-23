const express = require('express')
const router = express.Router()

const jobsModel = require('../models/job')

router.get('/jobs', async (req, res) => {
    let jobList = await jobsModel.getJobByJobId()
    res.send(jobList)
})

router.get('/jobs/:id', async (req, res) => {
    let id = req.params.id
    let jobs = await jobsModel.getJobByJobId(id)
    res.send(jobs)
})


module.exports = router
