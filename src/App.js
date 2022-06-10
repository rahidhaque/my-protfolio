import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './pages/Home/Navbar';
import About from './pages/About/About';

function App() {
  return (
    <div className='mx-auto'>
      <Navbar>
        <Routes>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
