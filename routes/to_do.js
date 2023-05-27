const express=require('express')
const router=express.Router()
const {getAllToDoItems,createANewToDoItem,getAToDoItem}=require('../controllers/to_do')
router.route('/').get(getAllToDoItems).post(createANewToDoItem)
router.route('/:id').get(getAToDoItem)
// router.get("/",(req,res)=>{
//     res.send("List of all to-do-items")
// })

module.exports=router