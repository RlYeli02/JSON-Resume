const { work } = require('../CV');
const CV = require('../CV');
const router = require('express').Router();

//GET request
const { education } = CV;
router.get('/education', (req, res) => {
    res.send(education)
})

router.get('/education/courses', (req, res) => {
    res.send(education.courses);
})

//POST request

router.post('/education/add', (req, res) => {
    try {
        var newBasicInfo = req.body
        education.push(newBasicInfo)
        res.status(200).send("Added sucessfully")
    }
    catch (err) {
        res.status(400).send("bad request")

    }

})

// PUT request

router.put('/education/edit/:id', (req, res) => {
    try {
        var id = req.params.id

        var { institution, area, studyType, startDate, endDate, gpa, courses } = req.body


        education.map(education => {
            if (education.id == id) {
                education.institution = institution;
                education.area = area;
                education.studyType = studyType;
                education.startDate = startDate;
                education.endDate = endDate;
                education.gpa = gpa;
                education.courses = courses;
                res.status(200).send('Updated correctly')
            }
        })


    }
    catch (err) {
        res.status(404).send("bad request")
    }
})

// DELETe request

router.delete('/education/delete/:id', (req, res) => {

    try {
        var id = req.params.id

        education.map(education => {
            if (education.id == id) {
                education.splice(x, 1)
                res.status(200).send("education deleted")
            }
        })

    }
    catch (err) {
        res.status(400).send("bad request")
    }

})

module.exports = router