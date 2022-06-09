import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './pages/Home/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
