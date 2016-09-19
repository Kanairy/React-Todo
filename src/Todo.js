import React from 'react';
import './Todo.css';

const Todo = (props) => {
  return (
    <li className={props.todo.complete ? 'complete': 'incomplete'} 
        onClick={() => props.click(props.todo)}
        onDoubleClick={() => console.log(props)}>
      <span>{props.todo.title} - </span>
      <span>{(new Date(props.todo.timeAdded)).toString()}</span>
      <button onClick={() => props.removeTodo(props.todo)}>delete</button>
    </li>
  )
};

export default Todo;
