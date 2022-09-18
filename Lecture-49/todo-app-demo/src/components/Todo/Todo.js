import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import classes from './Todo.module.css';

const Todo = ({id,todoText,completed,deleteTodo,markTodoCompleted}) => {
  return (
      <li className={classes.todo}>
          <input onChange={()=>markTodoCompleted(id)}  type="checkbox" defaultChecked={completed} />
          <span style={{textDecoration : completed ? 'line-through' : 'none'}} className={classes['todo-text']}>{ todoText}</span>
          <span onClick={()=>deleteTodo(id)} className={classes['todo-icon']}><FaTrashAlt/></span>
    </li>
  )
}

export default Todo;