import './App.css';
import Layout from './components/layout/Layout';
import { Route, Routes } from 'react-router-dom';
import AllFood from './pages/AllFood';
import MyCart from './pages/MyCart';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/allfoods" element={<AllFood />} />
        <Route path="/mycart" element={<MyCart />} />
      </Routes>
   </Layout>
  );
}

export default App;
