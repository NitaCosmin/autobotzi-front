import React from "react";
import "./Home.css";
import HomeBackground from './Imagini/HomeBackground.png';
import Separator from './Imagini/Separator.png';
import Line from './Imagini/Line.png';
import Ellipse from './Imagini/Ellipse.png';




const Home = () => {
  
    
  return (  
  
    <div className="HomeContainer">
          <img src={HomeBackground} alt="" className="HomeBackground-STYLE" />
          <img src={Separator} alt="" className="Separator-STYLE" />
          <img src={Line} alt="" className="Line-STYLE" />
          <img src={Line} alt="" className="Line1-STYLE" />
          <img src={Ellipse} alt="" className="Ellipse-STYLE" />
          <img src={Ellipse} alt="" className="Ellipse1-STYLE" />
          <img src={Ellipse} alt="" className="Ellipse2-STYLE" />
          
          <div className="NameLabel">Team Finder</div>
          <div className="ChoiceLabel">Login</div>
          <div className="ChoiceLabel1">SignUp</div>
         
    </div>
     
    
  );
};

export default Home;
