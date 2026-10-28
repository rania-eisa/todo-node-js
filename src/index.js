require('dotenv').config()
const express = require('express')
const cors=require('cors')
const app = express()
const todoroutes=require('./routes/todoroute')
const port = process.env.port
console.log(port)
const mongoose=require('mongoose')
mongoose.connect(process.env.mongo_url)
.then(()=>console.log('mongo database is connected'))
.catch((err)=>console.log(err))
app.use(express.json());
app.use(cors())


app.use(todoroutes)
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})