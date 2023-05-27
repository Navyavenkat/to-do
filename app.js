const express=require('express')
const app=express()
const PORT=3500
app.get('/',(req,res)=>{
    res.send('working')
})
app.listen(PORT,console.log(`Server runs at http://localhost:${PORT}`))