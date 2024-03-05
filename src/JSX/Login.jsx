import React from "react";
import "../CSS/Login.css";
import HomeBackground from '../Imagini/HomeBackground.png';
import {Link } from "react-router-dom";
import Line from '../Imagini/Line.png';
import Ellipse from '../Imagini/Ellipse.png';



const Login = () => {
  
    
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
          <Link to="/signup" >
          <div className="NameLabel1-Login">Sign/Up</div>
          </Link>
          <div className="ChoiceLabel-Login">Login</div>
          <button type="submit" class="button-Login">Continue</button>
          <div className="Collumn-Input-Login">
          <input type="email" className="textbox-Login" id="email" name="email" placeholder="E mail" required/>
          <input type="password" className="textbox-Login" id="password" name="password" placeholder="Password" required/>
          
          </div>
          </div>
  
         
    </div>
     
    
  );
};

export default Login;
