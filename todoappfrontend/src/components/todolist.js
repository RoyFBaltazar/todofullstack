import { connect } from "react-redux";
import ToDoItem from "./todoitem";

const mapToStateToProps = (state)=>({
    toDo: state.ToDoData
})
const ToDoList =(props)=>{
    
    
    return(
        <div>
            <h1>
                To do List:
            </h1>
            
            {props.toDo.map(ToDo =>{
           return( 
            <>
                <ToDoItem key={ToDo._id} ToDo={ToDo} />
            </>
           )
        })}


        </div>
    )
}
export default  connect(mapToStateToProps,{})(ToDoList);