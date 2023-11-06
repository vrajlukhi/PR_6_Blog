const blog = require("../models/blog.schema");
const user = require("../models/user.schema");

const blogui = (req, res) => {
    res.render("post");
}
const addblog = async (req, res) => {
    let userdata = await user.findById(req.cookies.id);
    let { title, content, image, category } = req.body;
    let data = await blog.create({
        title, content, image, category, author: userdata.username,
    });
    res.cookie("blogId", data.id).send(`blog created by ${userdata.username} `);
}
const getblog= async (req, res) => {
  data = await blog.find();
    res.send(data);
  }
  const uiblog=(req,res)=>{
    res.render("blog") 
  }
module.exports = { blogui, addblog,getblog ,uiblog}