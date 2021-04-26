const express = require('express');
const app = express();
const basics = require('./Controllers/basics')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


const PORT =  process.env.args || 4000;

//ROUTE

app.use('/resume', basics)

app.listen(PORT, ()=>{
    console.log('its working')
})