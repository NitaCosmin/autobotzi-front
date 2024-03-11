import React from "react";

import "../CSS/Navbar.css";

import MenuBar from '../WhiteMenu/MenuBarWhite.png';
import ExitIcon from '../Imagini/ExitIcon.png';
import HomeIcon from '../Imagini/HomeIcon.png';
import SquareIcon from '../Imagini/ProjectsIcon.png';
import NotificationIcon from '../Imagini/NotificationIcon.png';
import TeamIcon from '../Imagini/DepartmentsIcon.png';
import UserIcon from '../Imagini/UserIcon.png';

import {Link, useLocation } from 'react-router-dom';


const Navbar = () => {
    
  
  return (  
  
    
    <div className="MenuBar disable-selection ">
        <img src={MenuBar} alt="" className="MenuBar-Img" />
        <div className="MenuOptions">
           
            <img src={HomeIcon} alt="" className="MenuIcons" />
            <img src={SquareIcon} alt="" className="MenuIcons"  />  
            <img src={NotificationIcon} alt="" className="MenuIcons"  /> 
            <img src={TeamIcon} alt="" className="MenuIcons"  />
            <img src={UserIcon} alt="" className="MenuIcons"  />  
            <img src={ExitIcon} alt="" className="MenuIconsExit"  />  


        </div>
       


    </div>
   
     
    
  );
};

export default Navbar;
