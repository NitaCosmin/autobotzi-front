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


const Admin = () => {
    const location = useLocation();
    const [date, setDate] = useState(null);
    const [selectedDep, setselectedDep] = useState(null);
    const Departments = [
        { name: 'Dep1', code: '1' },
        { name: 'Dep1', code: '1' },
        { name: 'Dep1', code: '1' },
        { name: 'Dep1', code: '1' },
        { name: 'Dep1', code: '1' },
        { name: 'Dep1', code: '1' },
        { name: 'Dep1', code: '1' },
        { name: 'Dep1', code: '1' },
        { name: 'Dep1', code: '1' },
        { name: 'Dep1', code: '1' },
        { name: 'Dep1', code: '1' },
        { name: 'Dep1', code: '1' },
        { name: 'Dep1', code: '1' },
        { name: 'Dep1', code: '1' },
        { name: 'Dep1', code: '1' },
        
        
    ];
  
  return (  
  
    <div className="AdminContainer">
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
    <div className="Spacework1 disable-selection ">
        <img src={RoboImg} alt="" className="RoboImg-Style " /> 
        <img src={AddBackground} alt="" className="AddBackground-Style " />
        <div className="Departments-Label ">Departments</div>  
        <div className="Filters-Label ">Filers</div> 
        <div className="Department-Filter  ">  
            <ListBox value={selectedDep} onChange={(e) => setselectedDep(e.value)} options={Departments} optionLabel="name" 
                className="w-full md:w-14rem p-invalid" />
        </div>
    </div>
    <div className="Spacework2 disable-selection ">
        
           <img src={CalendarBackground} alt="" className="CalendarBackground-Style  " />
           <div className="Calendar  ">
           <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />
           </div>
    <img src={SearchBackground} alt="" className="SearchBackground-Style " />
    

    </div>
    <div className="MenuBar"></div>
  
         
    </div>
     
    
  );
};

export default Admin;
