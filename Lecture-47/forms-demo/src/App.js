import './App.css';
import Person from './components/Person';
import ShoppingList from './components/ShoppingList/ShoppingList';
import StateDemo from './components/StateDemo';

function App() {
  return (
    <div className="App">
      {/* <StateDemo/> */}
      {/* <Person name="Mayank">
        <h1>This is h1 between opening and closing tag</h1>  
        <p>This is a paragraph</p>
      </Person> */}
      <ShoppingList/>
    </div>
  );
}

export default App;
