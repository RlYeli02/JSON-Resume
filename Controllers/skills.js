const { work } = require('../CV');
const CV = require('../CV');
const router = require('express').Router();

//GET request

router.get('/skills', (req, res)=>{
    res.send(CV.skills)
})

router.get ('/skills/keywords', (req, res)=>{
    res.send(CV.skills.keywords);
})

//POST request

router.post('/skills/add', (req,res)=>{
    try{
        var newBasicInfo = req.body
        CV.skills.push(newBasicInfo)
        res.status(200).send("Added sucessfully")
    }
    catch(err){
        res.status(400).send("bad request")

    }

})

// PUT request

router.put('/skills/edit/:id', (req, res)=>{
    try{
       var id = req.params.id
    
        var {name,  level, keywords} = req.body
        var UpdateSkills = {name,  level, keywords}
        
        CV.skills.map(x=>{
            if (x.id==id){
                x.name = UpdateSkills.name;
                x.level = UpdateSkills.level
                x.keywords = UpdateSkills.keywords;
                res.status(200).send('Updated correctly')
            }
        })
    

    }
    catch(err){
        res.status(404).send("bad request")
    }
})

// DELETe request

router.delete('/skills/delete/:id', (req, res)=>{
    
   try{
       var id = req.params.id

       CV.skills.map(x=>{
           if (x.id==id){
               CV.skills.splice(x,1)
               res.status(200).send("skills deleted")
           }
       })

   }
    catch(err){
        res.status(400).send("bad request")
    }

})

module.exports = router