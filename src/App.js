import logo from './logo.svg';
import './App.css';
import Register from './components/register/Register';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import AdminDashboard from './pages/adminpage/AdminDashboard';
import Navbar from './components/navbar/Navbar';
import UploadTask from './pages/UploadTask/UploadTask';
import EmpDashboard from './pages/employeeDashboard/EmpDashboard';
import UpdateTask from './pages/UpdateTask/UpdateTask';

function App() {
  return (
    <>
    {/* <Register /> */}
    <Navbar />
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/admin' element={<AdminDashboard />} />
      <Route path='/uploadTask' element={<UploadTask />} />
      <Route path='/employee' element={<EmpDashboard />} />
      <Route path='/editTask' element={<UpdateTask />} />
    </Routes>
    </>
  );
}

export default App;
