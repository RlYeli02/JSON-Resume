const { work } = require('../CV');
const CV = require('../CV');
const router = require('express').Router();

//GET request
const { skills } = CV
router.get('/skills', (req, res) => {
    res.send(skills)
})

router.get('/skills/keywords', (req, res) => {
    res.send(skills.keywords);
})

//POST request

router.post('/skills/add', (req, res) => {
    try {
        var newBasicInfo = req.body
        skills.push(newBasicInfo)
        res.status(200).send("Added sucessfully")
    }
    catch (err) {
        res.status(400).send("bad request")

    }

})

// PUT request

router.put('/skills/edit/:id', (req, res) => {
    try {
        var id = req.params.id

        var { name, level, keywords } = req.body


        skills.map(skills => {
            if (skills.id == id) {
                skills.name = name;
                skills.level = level
                skills.keywords = keywords;
                res.status(200).send('Updated correctly')
            }
        })


    }
    catch (err) {
        res.status(404).send("bad request")
    }
})

// DELETe request

router.delete('/skills/delete/:id', (req, res) => {

    try {
        var id = req.params.id

        skills.map(skills => {
            if (skills.id == id) {
                skills.splice(x, 1)
                res.status(200).send("skills deleted")
            }
        })

    }
    catch (err) {
        res.status(400).send("bad request")
    }

})

module.exports = router