import logo from './logo.svg';
import './App.css';
import Register from './components/register/Register';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';

function App() {
  return (
    <>
    {/* <Register /> */}
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </>
  );
}

export default App;
