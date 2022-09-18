import React, { useState,useEffect} from 'react';
import Form from '../Form/Form';
import TodoList from '../TodoList/TodoList';
import classes from './TodoApp.module.css';
import { v4 as uuid } from 'uuid';

const TodoApp = () => {

  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');

  // const initialTodos = [
  //     {
  //       id: '31567',
  //       task: 'Go to Gym',
  //       completed:false
  //     },
  //     {
  //       id: '2378',
  //       task: 'Watch Movies',
  //       completed:true
  //     },
  //     {
  //       id: '327688',
  //       task: 'Learn React',
  //       completed:false
  //     },
  // ]

  // RUNS FOR EACH RENDER
  // useEffect(() => {
  //   console.log('use effect');
  // });

  // RUNS FOR 1 TIME AFTER FIRST RENDER
  // useEffect(() => {
  //   console.log('use effect');
  // },[]);

  
    
  const [todos, setTodos] = useState(initialTodos);
  
  const addTodo = (newTodoText)=>{
    setTodos((prevState) => {
      return [...prevState, { id: uuid(), task: newTodoText, completed: false }];
    });
  }

  const deleteTodo = (todoId) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== todoId);
    });
  }

  const markTodoCompleted = (todoId) => {
    setTodos((prevState) => {
      return prevState.map((todo) => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo);
      })
  }

  // RUNS WHENEVER THERE IS A CHANGE IN TODOS ARRAY.
  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  },[todos])

  return (
    <section className={classes['todo-app']}>
      <Form addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        markTodoCompleted={markTodoCompleted}
      />
    </section>
  )
}

export default TodoApp;