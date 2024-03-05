
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
        
import './App.css';
import Home from './JSX/Home';
import SignUp from "./JSX/SingUp";
import Login from "./JSX/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
       
      </Routes>
    </Router>
  );
}

export default App;

