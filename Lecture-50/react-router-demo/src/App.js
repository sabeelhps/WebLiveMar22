import { useState} from 'react'
import './App.css';
import Dog from './components/Dog';
import Cat from './components/Cat';
import Home from './components/Home';
import { Routes, Route, Link } from 'react-router-dom';
import GithubProfile from './components/GithubProfile';

function App() {

  // const [page, setPage] = useState('home');

  return (
    <div className="App">
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/cat">Cat</Link></li>
            <li><Link to="/dog">Dog</Link></li>
            <li><Link to="/github">Github </Link></li>
          </ul>
        </nav>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/dog" element={ <Dog/>} />
        <Route path="/dog/:dogId" element={ <Dog/>} />
        <Route path="/github" element={ <GithubProfile/>} />
      {/* { page==='cat' && <Cat />}
      {page === 'dog' && <Dog />}
      {page ==='home' && <Home />} */}
     </Routes>  
    </div>
  );
}

export default App;
