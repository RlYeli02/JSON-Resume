const { work } = require('../CV');
const CV = require('../CV');
const router = require('express').Router();

//GET request
const { volunteer } = CV
router.get('/volunteer', (req, res) => {
    res.send(volunteer)
})

router.get('/volunteer/highlights', (req, res) => {
    res.send(volunteer.highlights);
})

//POST request

router.post('/volunteer/add', (req, res) => {
    try {
        var newBasicInfo = req.body
        volunteer.push(newBasicInfo)
        res.status(200).send("Added sucessfully")
    }
    catch (err) {
        res.status(400).send("bad request")

    }

})

// PUT request

router.put('/volunteer/edit/:id', (req, res) => {
    try {
        var id = req.params.id

        var { organization, position, website, startDate, endDate, summary, highlights } = req.body


        volunteer.map(volunteer => {
            if (volunteer.id == id) {
                volunteer.organization = organization;
                volunteer.position = position;
                volunteer.website = website;
                volunteer.startDate = startDate;
                volunteer.endDate = endDate;
                volunteer.summary = summary;
                volunteer.highlights = highlights;
                res.status(200).send('Updated correctly')
            }
        })


    }
    catch (err) {
        res.status(404).send("bad request")
    }
})

// DELETe request

router.delete('/volunteer/delete/:id', (req, res) => {

    try {
        var id = req.params.id

        volunteer.map(volunteer => {
            if (volunteer.id == id) {
                volunteer.splice(x, 1)
                res.status(200).send("volunteer deleted")
            }
        })

    }
    catch (err) {
        res.status(400).send("bad request")
    }

})

module.exports = router