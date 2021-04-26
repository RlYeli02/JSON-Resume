const { work } = require('../CV');
const CV = require('../CV');
const router = require('express').Router();

//GET request

router.get('/education', (req, res)=>{
    res.send(CV.education)
})

router.get ('/education/courses', (req, res)=>{
    res.send(CV.education.courses);
})

//POST request

router.post('/education/add', (req,res)=>{
    try{
        var newBasicInfo = req.body
        CV.education.push(newBasicInfo)
        res.status(200).send("Added sucessfully")
    }
    catch(err){
        res.status(400).send("bad request")

    }

})

// PUT request

router.put('/education/edit/:id', (req, res)=>{
    try{
       var id = req.params.id
    
        var {institution,  area, studyType, startDate, endDate,  gpa, courses } = req.body
        var UpdateVolunteer = {institution,  area, studyType, startDate, endDate,  gpa, courses  }
        
        CV.education.map(x=>{
            if (x.id==id){
                x.institution = UpdateVolunteer.institution;
                x.area = UpdateVolunteer.area;
                x.studyType = UpdateVolunteer.studyType;
                x.startDate = UpdateVolunteer.startDate;
                x.endDate = UpdateVolunteer.endDate;
                x.gpa=UpdateVolunteer.gpa;
                x.courses = UpdateVolunteer.courses;
                res.status(200).send('Updated correctly')
            }
        })
    

    }
    catch(err){
        res.status(404).send("bad request")
    }
})

// DELETe request

router.delete('/education/delete/:id', (req, res)=>{
    
   try{
       var id = req.params.id

       CV.education.map(x=>{
           if (x.id==id){
               CV.education.splice(x,1)
               res.status(200).send("education deleted")
           }
       })

   }
    catch(err){
        res.status(400).send("bad request")
    }

})

module.exports = router