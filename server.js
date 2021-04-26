const express = require('express');
const app = express();
const basics = require('./Controllers/basics')
const work = require('./Controllers/work')
const volunteer = require('./Controllers/volunteer')
const education = require('./Controllers/education')
const skills = require('./Controllers/skills')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


const PORT =  process.env.args || 4000;

//ROUTE

app.use('/resume', basics)
app.use('/resume/section', work)
app.use('/resume/vol', volunteer)
app.use('/resume/edu', education)
app.use('/resume/sk', skills)

app.listen(PORT, ()=>{
    console.log('its working')
})