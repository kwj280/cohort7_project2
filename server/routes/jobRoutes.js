const express = require('express')
const router = express.Router()

const jobsModel = require('../model/job')

//@test curl -X POST http://localhost:5000/job/create -H 'Content-Type: application/json' -d '{"title": "software developer", "description" : "develop things"}'
router.post('/create', async (req, res) => {
    // let jobList = await jobsModel.getJobByJobId()
    // res.send(jobList)
    console.log(req.body)
    res.send(req.body)
})

router.get('/:id', async (req, res) => {
    let id = req.params.id
    let jobs = await jobsModel.getJobByJobId(id)
    res.send(jobs)
})


module.exports = router
