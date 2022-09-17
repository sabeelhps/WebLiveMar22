import React from 'react';
import TodoList from '../TodoList/TodoList';

const TodoApp = () => {

    const initialTodos = [
        {
          id: '31567',
          task: 'Go to Gym',
          completed:false
        },
        {
          id: '2378',
          task: 'Watch Movies',
          completed:true
        },
        {
          id: '327688',
          task: 'Learn React',
          completed:false
        },
    ]

    return (
      <section>
        <TodoList todos={ initialTodos} />
      </section>
    )
}

export default TodoApp;