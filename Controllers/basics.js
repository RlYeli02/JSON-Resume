const CV = require('../CV');
const router = require('express').Router();

//GET request

router.get('/basics', (req, res)=>{
    res.send(CV.basics)
})

router.get ('/basics/profiles', (req, res)=>{
    res.send(CV.basics.profiles);
})

router.get ('/basics/location', (req, res)=>{
    res.send(CV.basics.location);
})

//POST request

router.post('/basics/add', (req,res)=>{
    try{
        var newBasicInfo = req.body
        Object.assign(CV.basics, newBasicInfo)
        res.status(200).send("Added sucessfully")
    }
    catch(err){
        res.status(400).send("bad request")

    }

})

module.exports= router