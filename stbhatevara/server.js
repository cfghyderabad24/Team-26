const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express')
const app = express()
require('dotenv').config()
const mongoose=require('mongoose')
const User = require('./APIs/UserApi')
const dburi = process.env.DBURI

mongoose.connect(dburi)
.then((client)=>{console.log('db success')
  app.listen(3500,()=>{console.log('server listening')})
})
.catch((err)=>console.log(err))



app.use('/user', User);
