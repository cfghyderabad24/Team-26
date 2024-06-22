const express= require('express')
const User = require('../models/User')
const app = express()
const bcryptjs = require('bcryptjs')
app.use(express.json())
app.post('/signup',async(req,res)=>{
    const newUser = req.body;
    console.log(newUser)
    let user= await User
    .findOne({username:newUser.username})
    if(user!=null)
        {
            res.status(400).json({msg:"user already exists"})
        }
    else
    {
        let hashPass= await bcryptjs.hash(newUser.password,5);
        newUser.password=hashPass
        const newActUser = new User(newUser);
        await newActUser.save();
        res.status(200).json(newUser);
    }
})

app.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
  
        res.json({
            token: token
        })
        return;
    }

    
    res.status(411).json({
        message: "Error while logging in"
    })
})



module.exports=app;