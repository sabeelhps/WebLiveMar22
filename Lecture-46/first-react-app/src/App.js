import React from 'react';
import Person from './components/Person';
import LearnJSX from './components/LearnJSX';
import TodoList from './components/TodoList';

function App() {
  
  return <div>
    {/* <LearnJSX/> */}
   <Person name="Mayank" age="22" favColor="Blue"/>
   <Person name="Vivek" age="23" favColor="Green"/>
   <Person name="Sarthak" age="24" favColor="Orange"/>
   <Person name="Himanshu" age="21" favColor="Black"/>
    {/* <TodoList/> */}
</div>
}


export default App;