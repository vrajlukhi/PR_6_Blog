const express=require("express");
const connect = require("./config/db");
const cookie=require("cookie-parser");
const router = require("./routes/user.route");
const blog = require("./routes/blog.route");
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookie())
app.set("view engine","ejs")
app.use(express.static(__dirname+"/public"))
app.set("views",(__dirname+"/views"))

app.use("/user",router)
app.use("/blog",blog)

app.listen(8090,()=>{
    console.log("Server 8090 start");
    connect()
})