const CV = require('../CV');
const router = require('express').Router();

//GET request

router.get('/basics', (req, res) => {
    res.send(CV.basics)
})

router.get('/basics/profiles', (req, res) => {
    res.send(CV.basics.profiles);
})

router.get('/basics/location', (req, res) => {
    res.send(CV.basics.location);
})

//POST request

router.post('/basics/add', (req, res) => {
    try {
        var newBasicInfo = req.body
        Object.assign(CV.basics, newBasicInfo)
        res.status(200).send("Added sucessfully")
    }
    catch (err) {
        res.status(400).send("bad request")

    }

})

// PUT request

router.put('/basics/:edit', (req, res) => {
    try {
        var fieldToUpdate = req.params.fieldToUpdate

        var { name, title, email, label, phone, website, location, profiles } = req.body
        var UpdateBasics = { name, title, email, label, phone, website, location, profiles }

        if (UpdateBasics) {
            CV.basics = UpdateBasics;
            res.status(200).send('Updated correctly')
        }

    }
    catch (err) {
        res.status(404).send("bad request")
    }
})

// DELETe request

router.delete('/basics/delete', (req, res) => {

    if (CV.basics) {
        delete CV.basics;
        res.status(200).send("deleted")
    }
    res.status(400).send("not found")


})

module.exports = router