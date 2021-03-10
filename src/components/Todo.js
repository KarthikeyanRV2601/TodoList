import React from 'react';

const Todo=({text,setTodos,todo,Todos})=>{
    //Events
    const trashHandler=()=>{
        setTodos(Todos.filter(tdo=>(tdo.id!==todo.id)));
    }
    const completeHandler=()=>{
        setTodos(Todos.map((tdo)=>{
            if(tdo.id===todo.id)    
            tdo={
                ...tdo,
                completed:!tdo.completed
            }
            return tdo;
        }))
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ?"completed":""}`}>
                {text}
            </li>
            <button 
            onClick={completeHandler} 
            className="complete-btn"
            ><i className="fas fa-check"></i></button>
            <button 
            onClick={trashHandler} 
            className="trash-btn"
            ><i className="fas fa-trash"></i></button>
        </div>
    );
}
export default Todo;