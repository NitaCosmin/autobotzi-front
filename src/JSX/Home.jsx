import React,{ useEffect } from 'react';
import "../CSS/Home.css";
import HomeBackground from '../Imagini/HomeBackground.png';
import Separator from '../Imagini/Separator.png';
import Line from '../Imagini/Line.png';
import Ellipse from '../Imagini/Ellipse.png';
import {Link } from "react-router-dom";



const Home = () => {


  useEffect(() => {

    const choiceLabel1 = document.querySelector(".ChoiceLabel1");
    const choiceLabel = document.querySelector(".ChoiceLabel");
    const separatorStyle = document.querySelector(".Separator-STYLE");

    const handleMouseEnter = () => {
        separatorStyle.style.transform = "translateX(-10%)";
        choiceLabel.style.transform = 'scale(0.9)';
        choiceLabel1.style.transform = 'scale(1.1)';
    };

    const handleMouseLeave = () => {
        separatorStyle.style.transform = "none";
        choiceLabel.style.transform = 'none';
        choiceLabel1.style.transform = 'none';

    };
    const handleMouseEnter1 = () => {
      separatorStyle.style.transform = "translateX(10%)";
      choiceLabel1.style.transform = 'scale(0.9)';
      choiceLabel.style.transform = 'scale(1.1)';


  };

  const handleMouseLeave1 = () => {
      separatorStyle.style.transform = "none";
      choiceLabel1.style.transform = 'none';
      choiceLabel.style.transform = 'none';

  };
    
    choiceLabel1.addEventListener("mouseenter", handleMouseEnter);
    choiceLabel1.addEventListener("mouseleave", handleMouseLeave);
    choiceLabel.addEventListener("mouseenter", handleMouseEnter1);
    choiceLabel.addEventListener("mouseleave", handleMouseLeave1);


    return () => {
        choiceLabel1.removeEventListener("mouseenter", handleMouseEnter);
        choiceLabel1.removeEventListener("mouseleave", handleMouseLeave);
        choiceLabel.addEventListener("mouseenter", handleMouseEnter1);
        choiceLabel.addEventListener("mouseleave", handleMouseLeave1);
    };
  }, []);
  
 
  return (  
  
    <div className="HomeContainer">
          <img src={HomeBackground} alt="" className="HomeBackground-STYLE" />
          <div className="HomeContent">
          <img src={Line} alt="" className="Line-STYLE" />
          <img src={Line} alt="" className="Line1-STYLE" /> 
          <img src={Separator} alt="" className="Separator-STYLE" />
          <img src={Ellipse} alt="" className="Ellipse-STYLE" />
          <img src={Ellipse} alt="" className="Ellipse1-STYLE" />
          <img src={Ellipse} alt="" className="Ellipse2-STYLE" />
          <div className="NameLabel">Team Finder</div>
          <Link to="/login" >
          <div className="ChoiceLabel">Login</div>  
          </Link>
          <Link to="/signup" >
          <div className="ChoiceLabel1">SignUp</div>  
          </Link>
         
          
          </div>
  
         
    </div>
     
    
  );
};

export default Home;
