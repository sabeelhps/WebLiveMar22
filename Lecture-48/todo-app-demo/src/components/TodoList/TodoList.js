import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({todos}) => {
  return (
      <ul>
          {
              todos.map((todo) => {
                  return <Todo
                      key={todo.id}
                      id={todo.id}
                      todoText={todo.task}
                      completed={todo.completed}
                  />
              })
          }
    </ul>
  )
}

export default TodoList;