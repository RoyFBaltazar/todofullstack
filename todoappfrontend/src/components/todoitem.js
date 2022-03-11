import { useState } from "react";
import { connect } from "react-redux";
import { removeToDo, updateToDo } from "../actions";




const ToDoItem = (props)=>{
  const [completed, setCompleted]= useState(props.ToDo.completed) 
// console.log(props.ToDo)
   const handleDelete =(e)=>{
       e.preventDefault()
      
    props.removeToDo(e.target.id, props.ToDo)
   }
  function handleToggele(e){
      setCompleted(!completed)
      console.log(e.target.id)
      props.updateToDo(e.target.id)
  }
return(
    <div>
 
<div><h1>{props.ToDo.title}</h1>
<p>{props.ToDo.toDocontent}</p>
<h3 id={props.ToDo._id} onClick={handleToggele}>{completed ? 'Done' : 'Need to do'}</h3>
<button id={props.ToDo._id} onClick={handleDelete}>Delete</button>
</div>
    </div>
)
}
export default connect(null, {removeToDo, updateToDo}) (ToDoItem);