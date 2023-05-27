const getAllToDoItems=(req,res)=>{
    res.send('List of all to_do_item')
}
const createANewToDoItem=(req,res)=>{
    // res.send('new list')
    res.status(200).json(req.body)
}

module.exports={getAllToDoItems,createANewToDoItem}
