const express=require('express')
const router=express.Router()

router.get("/",(req,res)=>{
    res.send("List of all to-do-items")
})
module.exports=router