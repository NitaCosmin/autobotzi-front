
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
        
import './App.css';
import Home from './JSX/Home';
import SignUp from "./JSX/SingUp";
import Login from "./JSX/Login";
import Admin from "./JSX/Admin";
import Projects from "./JSX/Projects";
import DepartmentCard from "./JSX/DepartmentCard";
import AppHome from "./JSX/AppHome";
import Profile from "./JSX/Profile";
import ProjectCard from "./JSX/ProjectCard";


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
          <Route path="/apphome" element={<AppHome />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projectcard" element={<ProjectCard />} />




       
      </Routes>
    </Router>
  );
}

export default App;

