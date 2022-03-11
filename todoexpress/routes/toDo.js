const express = require('express')
const toDoRoute = express.Router()
const ToDo = require('../schemas/toDoSchema')

toDoRoute.get('/', (req,res)=>{
    ToDo.find({}, (error, result)=>{
        if(error){
            res.status(404).json({message: error})
        }
        if(result === null || result === undefined){
            res.status(404).json({message: "no to do list found"})
        }
        res.status(200).json({message: result})
    })
    // res.status(200).json({message: 'works'})
})

toDoRoute.get('/:id', (req, res)=>{
    let id = req.params.id
    const update = req.body
   
    console.log(id)
    ToDo.findById(id, update, {new: true}, (error, result)=>{
        if(error){
            console.log(id)
            res.status(400).json({message: error.message})
        }
        if(result === null || result === undefined){
            res.status(404).json({message: 'not Found'})
        }
        res.status(200).json({data: result})
    })
})

// toDoRoute.get('/:toDo', (req, res)=>{
//     const toDo = req.params.ToDo
    

//     ToDo.find(toDo, (error, searchedList)=>{
//         if(error){
//             res.status(400).json({message: error.message})
//         }
//         res.status(201).json({message: searchedList})
//     })
// })
toDoRoute.post('/', (req, res)=>{
    
    const newToDolist = req.body

    ToDo.create(newToDolist, (error, updatedList)=>{
        if(error){
            res.status(400).json({message: error.message})
        }
        res.status(201).json({message: updatedList})
    })
})
toDoRoute.put('/:id', (req, res)=>{
    const id = req.params.id
    const updatedDolist = req.body

    ToDo.findByIdAndUpdate(id, updatedDolist, (error, updatedList)=>{
        if(error){
            res.status(400).json({message: error.message})
        }
        res.status(200).json({message: updatedList})
    })
})
toDoRoute.delete('/:id', (req,res)=>{
    const id= req.params.id
    ToDo.findByIdAndDelete(id, (error, returned)=>{
        if(error){
            res.status(404).json({message: error.message})
        }
        res.status(204).json({Todo: `this ${returned} has been deleted`})
    })
})

module.exports = toDoRoute