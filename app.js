const express=require('express')
const  to_do  = require('./routes/to_do')

const app=express()
const PORT=3500
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('working')
})
app.use('/api/v1/to_do',to_do)

app.listen(PORT,console.log(`Server runs at http://localhost:${PORT}`))