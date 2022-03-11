import dummyData from "../components/dummyData";
import { ADD_TO_DO, FETCH_TO_DO_FAIL, FETCH_TO_DO_START, FETCH_TO_DO_SUCCESS, REMOVE_TO_DO, UPDATE_TO_DO } from "../actions";
const initialState = {
    ToDoData : dummyData,
    isLoading: false,
    error: ''
}

export default function reducer (state =initialState, action){
switch(action.type){
    case FETCH_TO_DO_START:
        return{
            ...state, ToDoData: state.ToDoData, error: '', isLoading: true
        }
    case FETCH_TO_DO_FAIL:
        return{
            ...state, ToDoData: state.ToDoData, error: action.payload, isLoading: false
        }
    case FETCH_TO_DO_SUCCESS:
        return{
            ...state, ToDoData: action.payload, error: '', isLoading: false
        }

    case ADD_TO_DO:
    console.log(action.payload)
        return{
            ...state, ToDoData: [ ...state.ToDoData, action.payload]
        }
        
    case REMOVE_TO_DO :
        let newState = state.ToDoData.filter(item=> item !== action.payload)
        return{
            ...state, ToDoData: newState
        }
        case UPDATE_TO_DO : 
        console.log(action.payload._id)
        // return state.ToDoData.map((todo)=>{
        //    if(todo._id === action.payload._id){
              
        //        return{...todo, completed: !todo.completed}}
        //        return todo
        // })
        let updatedState = {...state}
        updatedState.ToDoData.splice(state.ToDoData.indexOf(action.payload._id), 1, action.payload)
        console.log(updatedState.ToDoData)
        return{
            ...state, ToDoData: updatedState.ToDoData
        }
        

    default: return state;        
}



}