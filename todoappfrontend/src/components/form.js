import { useState } from "react"
import { connect } from "react-redux"
import { addToDo } from "../actions"

function ToDoForm(props){
const [initialForm] = useState({
    title: '',
    toDocontent: '',
    completed: false
})
// console.log(props)
const [form, setForm] = useState(initialForm)
const handleChange=(e)=>{
    setForm({...form, [e.target.name] : e.target.value})
}
const handleSubmit =(e)=>{
    e.preventDefault()
    props.addToDo(form)
    setForm(initialForm)
}
    return(<div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type= 'text' name='title'  onChange={handleChange}/>
            <label htmlFor="title">To do info:</label>
            <input type= 'text' name='toDocontent' onChange={handleChange} />
            <input type='submit'/>
        </form>
    </div>)
}
export default connect(null, {addToDo})(ToDoForm)