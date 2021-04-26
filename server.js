const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))


const PORT =  process.env.args || 4000;

