const express = require('express');
const app = express();
const basics = require('./Controllers/basics')
const work = require('./Controllers/work')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


const PORT =  process.env.args || 4000;

//ROUTE

app.use('/resume', basics)
app.use('/resume/section', work)

app.listen(PORT, ()=>{
    console.log('its working')
})