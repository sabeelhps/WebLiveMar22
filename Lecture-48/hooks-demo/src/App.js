import { useState } from 'react';
import './App.css';
import FoodSection from './components/FoodSection';
import Toggle from './components/Toggle';
import useToggle from './hooks/useToggle';
import Form from './components/Form';

function App() {

  const [toggleFoodSection, setToggleFoodSection] = useToggle(true);

  return (
    <div className="App">
      {toggleFoodSection && <FoodSection />}
      <button onClick={()=>setToggleFoodSection()}>Toggle Foods Section</button>
      <Toggle />
      <Form/>
    </div>
  );
}

export default App;
