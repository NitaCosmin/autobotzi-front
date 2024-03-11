import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import "../CSS/Admin.css";
import "../CSS/Calendar.css";
import MenuBar from '../WhiteMenu/MenuBarWhite.png';
import ExitIcon from '../Imagini/ExitIcon.png';
import HomeIcon from '../Imagini/HomeIcon.png';
import SquareIcon from '../Imagini/ProjectsIcon.png';
import NotificationIcon from '../Imagini/NotificationIcon.png';
import TeamIcon from '../Imagini/DepartmentsIcon.png';
import UserIcon from '../Imagini/UserIcon.png';
import RoboImg from '../WhiteMenu/RoboImgWhite.png';
import CalendarBackground from '../WhiteMenu/CalendarBackgroundWhite.png';
import AddBackground from '../WhiteMenu/AddBackgroundWhite.png';
import SearchBackground from '../WhiteMenu/SearchBackgroundWhite.png';
import { ListBox } from 'primereact/listbox';
import {Link, useLocation } from 'react-router-dom';
import Navbar from "../JSX/Navbar";


const DepartmentCard = () => {
    
  
  return (  
     
    <div className="AdminContainer">
    <Navbar/>
    <div className="Spacework1 disable-selection ">
        
    </div>
    <div className="Spacework2 ">
        
          
    

    </div>
    <div className="MenuBar"></div>
  
         
    </div>
     
    
  );
};

export default DepartmentCard;
