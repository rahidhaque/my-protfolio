import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './pages/Home/Navbar';

function App() {
  return (
    <div className='mx-auto px-0 lg-px-12 max-w-screen-sm lg:max-w-screen-lg'>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
