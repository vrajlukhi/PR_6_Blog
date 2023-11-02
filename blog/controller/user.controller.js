const user = require("../models/user.schema")

const signupui=(req,res)=>{
    res.status(200).render("signup")
}
const signup=async(req,res)=>{
    let{username,email,password,role}=req.body
    let userdata=await user.findOne({email : email})
    console.log(userdata)
    if(userdata){
        res.status(200).cookie("role",userdata.role)
        res.status(200).cookie("id",userdata.id).send(`Account created successfully ${userdata.username}`)
    }
    else{
        let data=await user.create(req.body)
        res.status(200).cookie("role",data.role)
        res.status(200).cookie("id",data.id).send(`Account created successfully ${data.username}`)
    }
}
module.exports={signup,signupui}