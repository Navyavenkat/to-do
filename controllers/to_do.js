const getAllToDoItems=(req,res)=>{
    res.send('List of all to_do_item')
}
const createANewToDoItem=(req,res)=>{
    // res.send('new list')
    res.status(200).json(req.body)
}
const getAToDoItem=(req,res)=>{
    res.send(`Displaying item with id ${req.params.id}`)
    //res.status(200).json(req.body)
}

const updateAToDoItem=(req,res)=>{
res.send(`Update item with id ${req.params.id}`)
}

const deleteAToDoItem=(req,res)=>{
    res.send(`Deleting item with id ${req.params.id}`)
    }

module.exports={getAllToDoItems,createANewToDoItem,getAToDoItem}
