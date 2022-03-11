
import './App.css';
import ToDoList from './components/todolist';
import ToDoForm from './components/form';
import { fetchToDo } from './actions';
import { useEffect } from 'react';
import { connect } from 'react-redux';

const mapToStateToProps=(state)=>({
  isLoading: state.isLoading,
  error: state.error
})

function App(props) {
  useEffect(()=>{
    props.fetchToDo()
  }, [])
  
  return (
    <div className="App">
      <ToDoForm/>
      {props.isLoading ? 'Todo is loading' : 'Todo is loaded'}
      <ToDoList/>
      {props.error !== '' ? props.error: ''}
    </div>
  );
}

export default connect(mapToStateToProps, {fetchToDo}) (App);
