const { work } = require('../CV');
const CV = require('../CV');
const router = require('express').Router();

//GET request

router.get('/volunteer', (req, res)=>{
    res.send(CV.volunteer)
})

router.get ('/volunteer/highlights', (req, res)=>{
    res.send(CV.volunteer.highlights);
})

//POST request

router.post('/volunteer/add', (req,res)=>{
    try{
        var newBasicInfo = req.body
        CV.volunteer.push(newBasicInfo)
        res.status(200).send("Added sucessfully")
    }
    catch(err){
        res.status(400).send("bad request")

    }

})

// PUT request

router.put('/volunteer/edit/:id', (req, res)=>{
    try{
       var id = req.params.id
    
        var {organization,  position, website, startDate, endDate,  summary, highlights } = req.body
        var UpdateVolunteer = {organization, position, website, startDate, endDate,  summary, highlights }
        
        CV.volunteer.map(x=>{
            if (x.id==id){
                x.organization = UpdateVolunteer.organization;
                x.position = UpdateVolunteer.position;
                x.website = UpdateVolunteer.website;
                x.startDate = UpdateVolunteer.startDate;
                x.endDate = UpdateVolunteer.endDate;
                x.summary=UpdateVolunteer.summary;
                x.highlights = UpdateVolunteer.highlights;
                res.status(200).send('Updated correctly')
            }
        })
    

    }
    catch(err){
        res.status(404).send("bad request")
    }
})

// DELETe request

router.delete('/volunteer/delete/:id', (req, res)=>{
    
   try{
       var id = req.params.id

       CV.volunteer.map(x=>{
           if (x.id==id){
               CV.volunteer.splice(x,1)
               res.status(200).send("volunteer deleted")
           }
       })

   }
    catch(err){
        res.status(400).send("bad request")
    }

})

module.exports = router