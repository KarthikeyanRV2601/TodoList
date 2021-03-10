import React from 'react';
//Import comps
import Todo from './Todo';
const Todolist=({Todos,setTodos,filteredTodos})=>{
    return(
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo)=>(
        <Todo setTodos={setTodos} Todos={Todos} todo={todo} key={todo.id} text={todo.text}/>
        ))} 
      </ul>
    </div>);
}

export default Todolist;