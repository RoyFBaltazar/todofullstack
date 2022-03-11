const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const toDoRoute = require('./routes/toDo')
const morgan = require('morgan')
const cors = require('cors')


dotenv.config()
const mongoConnect = require('./config/mongoConfig')

const app  = express()
const port = process.env.PORT || 4000
app.use(cors({
    origin: "*"
}))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/toDo', toDoRoute)
app.get('/', (req,res)=>{
    res.status(200).json({message: "ToDo API up!"})
})
app.listen(port, ()=>{
    mongoConnect()
    console.log(`Server listening at ${port}`)
})



// 1. Server
//  Get ALL todos
//  Get todo by ID
//  Update Todo by ID
//  Delete TODO by ID
//  Create TODO
// 2. Mongoose
//  Schema:
//  ToDo Title
//  Todo TextContent
//  Created_At
//  Completed: true/false