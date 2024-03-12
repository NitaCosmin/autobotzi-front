
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
        
import './App.css';
import Home from './JSX/Home';
import SignUp from "./JSX/SingUp";
import Login from "./JSX/Login";
import Admin from "./JSX/Admin";
import Projects from "./JSX/Projects";
import DepartmentCard from "./JSX/DepartmentCard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> 
         <Route path="/admin" element={<Admin />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/departments" element={<DepartmentCard />} />



       
      </Routes>
    </Router>
  );
}

export default App;

