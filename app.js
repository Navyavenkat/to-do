const express=require('express')
const  to_do  = require('./to_do')
const app=express()
const PORT=3500
app.get('/',(req,res)=>{
    res.send('working')
})

app.use('/api/v1/to_do',to_do)
app.listen(PORT,console.log(`Server runs at http://localhost:${PORT}`))