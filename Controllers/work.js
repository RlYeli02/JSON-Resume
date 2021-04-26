const { work } = require('../CV');
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

router.put('/work/edit/:id', (req, res)=>{
    try{
       var id = req.params.id
    
        var {company, position, website, startDate, endDate,  summary, highlights } = req.body
        var UpdateWork = {company, position, website, startDate, endDate,  summary, highlights }
        
        CV.work.map(x=>{
            if (x.id==id){
                x.company = UpdateWork.company;
                x.position = UpdateWork.position;
                x.website = UpdateWork.website;
                x.startDate = UpdateWork.startDate;
                x.endDate = UpdateWork.endDate;
                x.summary=UpdateWork.summary;
                x.highlights = UpdateWork.highlights;
                res.status(200).send('Updated correctly')
            }
        })
    

    }
    catch(err){
        res.status(404).send("bad request")
    }
})

// DELETe request

router.delete('/work/delete/:id', (req, res)=>{
    
   try{
       var id = req.params.id

       CV.work.map(x=>{
           if (x.id==id){
               work.splice(x,1)
               res.status(200).send("message deleted")
           }
       })

   }
    catch(err){
        res.status(400).send("bad request")
    }

})

module.exports = router