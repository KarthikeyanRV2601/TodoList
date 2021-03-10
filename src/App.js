import React,{useState,useEffect} from 'react';
import './App.css';
//importing components
import Form from './components/form';
import TodoList from'./components/Todolist';

function App() {
  
  //Run once when the app sstarts
  useEffect(()=>{
  getLocalTodos();

  },[]);


  //states
  const[InputText,setInputText]=useState("");
  const [Todos,setTodos]=useState([]);
  const [Status,setStatus]=useState('all');
  const [filteredTodos,setFilteredTodos]=useState([]);

  //use Effect to run on specific change
  
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },[Todos,Status]);

  //functions
  const filterHandler=()=>{
    switch(Status){
      case 'completed':
      setFilteredTodos(Todos.filter(todo=>todo.completed===true));
      break;
      case 'uncompleted':
      setFilteredTodos(Todos.filter(todo=>todo.completed===false));
      break;
      default:
        setFilteredTodos(Todos);

    }
  }

  const saveLocalTodos=()=>{localStorage.setItem('Todos',JSON.stringify(Todos))}

  const getLocalTodos=()=>{
    
    if(localStorage.getItem('Todos')===null)
    localStorage.setItem('Todos',JSON.stringify([]))
    else{
    let LocalTodo=JSON.parse(localStorage.getItem('Todos',JSON.stringify(Todos)));
    setTodos(LocalTodo);
    }
    return;
  }
  return (
    <div>
      <header>
      <h1>My Todo List</h1>
      </header>
      <Form 
      InputText={InputText} 
      setInputText={setInputText} 
      Todos={Todos} setTodos={setTodos} 
      setStatus={setStatus} />
      <TodoList 
      filteredTodos={filteredTodos}
      setTodos={setTodos} 
      Todos={Todos}/>
    </div>
  );
}

export default App;
