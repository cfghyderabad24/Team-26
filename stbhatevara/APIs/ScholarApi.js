const express = require('express');
const Basicinfo = require('../models/Basicinfo');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(express.json())

app.post('/fresh',async(req,res)=>{
    const scholarDetails=req.body
    const newScholar = new Basicinfo(scholarDetails);
    await newScholar.save();
    res.status(200).json(newScholar)
})

module.exports=app;


