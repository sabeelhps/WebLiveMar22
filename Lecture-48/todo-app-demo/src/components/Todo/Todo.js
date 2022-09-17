import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Todo = ({id,todoText,completed}) => {
  return (
      <li>
          <input type="checkbox" defaultChecked={completed} />
          <span>{ todoText}</span>
          <span><FaTrashAlt/></span>
    </li>
  )
}

export default Todo;