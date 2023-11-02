const {Router}=require("express")
const { signupui, signup } = require("../controller/user.controller")
const router=Router()

router.get("/signup",signupui)
router.post("/signup",signup)

module.exports=router