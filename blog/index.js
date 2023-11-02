const express=require("express");
const connect = require("./config/db");
const cookie=require("cookie-parser");
const router = require("./routes/user.route");
const app=express()
app.use(express.json())
app.use(cookie())
app.set("view engine","ejs")
app.set("views",__dirname+"/views")
app.use("/user",router)

app.listen(8090,()=>{
    console.log("Server 8090 start");
    connect()
})