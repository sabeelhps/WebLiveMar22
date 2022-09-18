import React, { useRef } from 'react'
import classes from './Form.module.css';

const Form = (props) => {

    const todoInpRef = useRef();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const newTodoText = todoInpRef.current.value;
        props.addTodo(newTodoText);
        todoInpRef.current.value = "";
    }

    return (
        <form onSubmit={formSubmitHandler} className={classes.form}>
            <div className={classes['form-control']}>
                <label htmlFor="todo-inp">Add Todos</label>
                <input type="text" placeholder='Add new todos' id="todo-inp" ref={todoInpRef} />
            </div>  
            <button className={classes['form-btn']}>Add</button>
      </form>
    )
}

export default Form;