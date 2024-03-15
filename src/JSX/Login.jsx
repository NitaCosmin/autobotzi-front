import React, { useState } from "react";
import "../CSS/Login.css";
import HomeBackground from '../Imagini/HomeBackground.png';
import { Link,  useNavigate } from "react-router-dom";
import Line from '../Imagini/Line.png';
import Ellipse from '../Imagini/Ellipse.png';
import axios from 'axios'; // Import axios for making HTTP requests

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://autobotzi-ccec90c77ecb.herokuapp.com/auth/sign-in', formData);
      const { token } = response.data;
      localStorage.setItem('token', token);
      setIsLoggedIn(true);
      console.log("Login successful. Token:", token);
      navigate("/admin"); // Use navigate function to redirect to signup page upon successful login
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };

  return (
    <div className="HomeContainer-Login">
      <img src={HomeBackground} alt="" className="HomeBackground-STYLE-Login" />
      <div className="HomeContent-SingUp">
        <img src={Line} alt="" className="Line-STYLE-Login" />
        <img src={Line} alt="" className="Line1-STYLE-Login" />
        <img src={Ellipse} alt="" className="Ellipse-STYLE-Login" />
        <img src={Ellipse} alt="" className="Ellipse1-STYLE-Login" />
        <img src={Ellipse} alt="" className="Ellipse2-STYLE-Login" />
        <div className="NameLabel-Login">Team Finder</div>
        <div className="NameLabel-Resset-Login">Reset Password</div>
        <Link to="/signup">
          <div className="NameLabel1-Login">Sign Up</div>
        </Link>
        <div className="ChoiceLabel-Login">Login</div>
        <form className="Login" onSubmit={handleSubmit}>
        <div className="Collumn-Input-Login">
          <input type="email" className="textbox-Login" id="email" name="email" placeholder="E mail" value={formData.email} onChange={handleChange} required />
          <input type="password" className="textbox-Login" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="button-Login">Continue</button>
      </form>
      </div>
    </div>
  );
};

export default Login;
