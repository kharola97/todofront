import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Profile from './Components/Profile';
import CreateTask from './Components/CreateTask';
import Pending from './Components/Pending';
import Completed from './Components/Completed';
import Alltasks from './Components/Alltasks';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Router>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
    <Route path="/createtasks" element={<CreateTask/>}></Route>
    <Route path="/pending" element={<Pending/>}></Route>
    <Route path="/completed" element={<Completed/>}></Route>
    <Route path="/alltasks" element={<Alltasks/>}></Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;

