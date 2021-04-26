const CV = require('../CV');
const router = require('express').Router();

//GET request

router.get('/work', (req, res)=>{
    res.send(CV.work)
})

router.get ('/basics/highlights', (req, res)=>{
    res.send(CV.work.highlights);
})

//POST request

router.post('/work/add', (req,res)=>{
    try{
        var newBasicInfo = req.body
        CV.work.push(newBasicInfo)
        res.status(200).send("Added sucessfully")
    }
    catch(err){
        res.status(400).send("bad request")

    }

})

// PUT request

router.put('/work/edit', (req, res)=>{
    try{
       
    
        var {company, position, website, startDate, endDate,  summary, highlights } = req.body
        var UpdateWork = {company, position, website, startDate, endDate,  summary, highlights }
    
        if(UpdateWork){
            CV.basics = UpdateWork;
            res.status(200).send('Updated correctly')
        }

    }
    catch(err){
        res.status(404).send("bad request")
    }
})

module.exports = router