const user = require("../models/user.schema")

const signupui=(req,res)=>{
    res.status(200).render("signup")
}
const signup=async(req,res)=>{
    let{username,email,password,role}=req.body
    let userdata=await user.findOne({email : email})
    if(!userdata){
        let data=await user.create(req.body)
        
        res.status(200).cookie("role",data.role)
        res.status(200).cookie("id",data.id).send(`Account created successfully ${data.username}`)
    }
    else{
        
        res.status(200).cookie("role",userdata.role)
        res.status(200).cookie("id",userdata.id).send(`Account created successfully ${userdata.username}`)
    }
}
const loginui=(req,res)=>{
    res.status(200).render("login")
}
const login=async(req,res)=>{
    let{email,password}=req.body
    try{
        const userdata=await user.findOne({email:email})
        if(userdata){
            if(userdata.password==password){
                res.cookie("role",userdata.role)
                res.status(200).cookie("id",userdata._id).send(`Welcome User ${userdata.username}`)
            }
            else{
                res.status(200).render("login",{message:`Invalid Credentials.`})
            }
        }
        else{
            res.status(200).render("login",{message:`Invalid Credentials.`})
        }
    }
    catch(error){
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
}
module.exports={signup,signupui,loginui,login}