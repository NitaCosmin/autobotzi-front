import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import "../CSS/Admin.css";
import MenuBar from '../Imagini/MenuBar.png';
import TeamFinderIcon from '../Imagini/TeamFinderIcon.png';
import HomeIcon from '../Imagini/HomeIcon.png';
import SquareIcon from '../Imagini/SquareIcon.png';
import NotificationIcon from '../Imagini/NotificationIcon.png';
import TeamIcon from '../Imagini/TeamIcon.png';
import UserIcon from '../Imagini/UserIcon.png';
import RoboImg from '../Imagini/RoboImg.png';
import CalendarBackground from '../Imagini/CalendarBackground.png';
import AddBackground from '../Imagini/AddBackground.png';
import SearchBackground from '../Imagini/SearchBackground.png';

const Admin = () => {
  
    const [date, setDate] = useState(null);
  return (  
  
    <div className="AdminContainer">
    <div className="MenuBar">
        <img src={MenuBar} alt="" className="MenuBar-Img" />
        <div className="MenuOptions">
            <img src={TeamFinderIcon} alt="" className="MenuIcons" /> 
            <img src={HomeIcon} alt="" className="MenuIcons"  />
            <img src={SquareIcon} alt="" className="MenuIcons"  />  
            <img src={NotificationIcon} alt="" className="MenuIcons"  /> 
            <img src={TeamIcon} alt="" className="MenuIcons"  />
            <img src={UserIcon} alt="" className="MenuIcons"  />  



        </div>


    </div>
    <div className="Spacework1">
        <img src={RoboImg} alt="" className="RoboImg-Style" /> 
        <img src={AddBackground} alt="" className="AddBackground-Style" />

    </div>
    <div className="Spacework2">
        
           <img src={CalendarBackground} alt="" className="CalendarBackground-Style" />
           <div className="Calendar">
           <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />
           </div>
    <img src={SearchBackground} alt="" className="SearchBackground-Style" />
    

    </div>
    <div className="MenuBar"></div>
  
         
    </div>
     
    
  );
};

export default Admin;
