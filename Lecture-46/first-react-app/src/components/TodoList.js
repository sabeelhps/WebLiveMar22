import React from 'react'

const TodoList = () => {

    const todos = [
        {
            todoText: 'Buy Groceries',
            isCompleted:false
        },
        {
            todoText: 'Go to Gym',
            isCompleted:true
        },
        {
            todoText: 'Buy Vegetables',
            isCompleted:false
        },
        {
            todoText: 'Learn React',
            isCompleted:true
        },
    ]

  

    return (
        <ul>
            {todos.map((todo) => {
                return <li>
                    {todo.todoText}
                    <input type="checkbox" defaultChecked={todo.isCompleted} />
                </li>
            })}
        </ul>
    )
}

export default TodoList;