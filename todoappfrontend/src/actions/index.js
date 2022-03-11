import axios from "axios"

export const ADD_TO_DO = "ADD_TO_DO"
export const REMOVE_TO_DO = "REMOVE_TO_DO"
export const UPDATE_TO_DO = "UPDATE_TO_DO"


export const FETCH_TO_DO_START = "FETCH_TO_DO_START"
export const FETCH_TO_DO_FAIL = "FETCH_TO_DO_FAIL"
export const FETCH_TO_DO_SUCCESS = "FETCH_TO_DO_SUCCESS"

export const addToDo = (toDo)=> (dispatch)=>{
    dispatch({type:FETCH_TO_DO_START})
    axios
    .post('http://localhost:4000/todo/', toDo)
    .then(data=> console.log(data))
    .catch(err=> dispatch({type: FETCH_TO_DO_FAIL, payload: err.message}))
    dispatch({type: ADD_TO_DO, payload: toDo})
}
export const removeToDo = (id, todo)=>(dispatch)=>{
    dispatch({type:FETCH_TO_DO_START})
    axios
    .delete(`http://localhost:4000/todo/${id}`)
    .then(data=>{
        dispatch({type: REMOVE_TO_DO, payload: todo})
    })
    .catch(err=> dispatch({type: FETCH_TO_DO_FAIL, payload: err.message}))
    // dispatch({type: REMOVE_TO_DO, payload: todo})
}

export const updateToDo = (id, update)=>(dispatch)=>{
    dispatch({type: FETCH_TO_DO_START}, update)
    axios
    .put(`http://localhost:4000/todo/${id}`, update)
    .then(data=>{
        
        dispatch({type: UPDATE_TO_DO, payload: data.data.message})
    })
    .catch(err=> dispatch({type: FETCH_TO_DO_FAIL, payload: err.message}))
}


export const fetchToDo = ()=>(dispatch)=>{
    dispatch({type:FETCH_TO_DO_START})
axios
.get('http://localhost:4000/todo/')
.then(data=>{
    
    dispatch({type: FETCH_TO_DO_SUCCESS, payload: data.data.message})
})
.catch(err=>{
    console.log(err.message)
    dispatch({type: FETCH_TO_DO_FAIL, payload: err.message })
})
}
