import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({todos,deleteTodo,markTodoCompleted}) => {
  return (
      <ul>
          {
              todos.map((todo) => {
                  return <Todo
                      key={todo.id}
                      id={todo.id}
                      todoText={todo.task}
                      completed={todo.completed}
                      deleteTodo={deleteTodo}
                      markTodoCompleted={markTodoCompleted}
                  />
              })
          }
    </ul>
  )
}

export default TodoList;