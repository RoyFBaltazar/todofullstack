const mongoose = require('mongoose')

const toDoSchema = new mongoose.Schema({

    title:{type:String, required: true},
    toDocontent: {type: String, required: true},
    created_At: {type: Date},
    completed: {type: Boolean, required: true}






})
 const toDoModel = mongoose.model('ToDo', toDoSchema)
 module.exports = toDoModel

 //  ToDo Title
//  Todo TextContent
//  Created_At
//  Completed: true/false
