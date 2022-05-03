
const CV = require('../CV');
const router = require('express').Router();

//GET request
const { work } = CV;

router.get('/work', (req, res) => {
    res.send(work)
})

router.get('/work/highlights', (req, res) => {
    res.send(work.highlights);
})

//POST request

router.post('/work/add', (req, res) => {
    try {
        var newBasicInfo = req.body
        work.push(newBasicInfo)
        res.status(200).send("Added sucessfully")
    }
    catch (err) {
        res.status(400).send("bad request")

    }

})

// PUT request

router.put('/work/edit/:id', (req, res) => {
    try {
        var id = req.params.id

        var { company, position, website, startDate, endDate, summary, highlights } = req.body


        work.map(work => {
            if (work.id == id) {
                work.company = company;
                work.position = position;
                work.website = website;
                work.startDate = startDate;
                work.endDate = endDate;
                work.summary = summary;
                work.highlights = highlights;
                res.status(200).send('Updated correctly')
            }
        })


    }
    catch (err) {
        res.status(404).send("bad request")
    }
})

// DELETe request

router.delete('/work/delete/:id', (req, res) => {

    try {
        var id = req.params.id

        work.map(work => {
            if (work.id == id) {
                work.splice(x, 1)
                res.status(200).send("work deleted")
            }
        })

    }
    catch (err) {
        res.status(400).send("bad request")
    }

})

module.exports = router