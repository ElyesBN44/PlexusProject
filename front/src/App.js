
import { Route, Routes } from 'react-router';
import './App.css';
import FrontPage from './components/frontpage/FrontPage';
import Login from './components/login/Login';
import Register from './components/register/Register1';
import PrivateRoute from './components/privateroute/PrivateRoute';
import Admin from './components/admin/Admin';
import ViewUsers_Admin from './components/admin/users_admin/view/ViewUsers_Admin';
function App() {
  return (
  <div className="app">
   <Routes>
    <Route path="/"  element={<FrontPage/>}/>
    <Route path="/register"  element={<Register/>}/>
    <Route path="/login"  element={<Login/>}/>
    <Route path="/privateroute"  element={<PrivateRoute/>}/>


    <Route path="/admin" element={<Admin/>}/>
     <Route path="/admin/ViewUsers" element={<ViewUsers_Admin/>}/>

   </Routes>
  </div>
  );
}

export default App;
