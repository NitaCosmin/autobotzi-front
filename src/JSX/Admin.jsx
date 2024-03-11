import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import "../CSS/Admin.css";
import "../CSS/Calendar.css";
import RoboImg from '../WhiteMenu/RoboImgWhite.png';
import CalendarBackground from '../WhiteMenu/CalendarBackgroundWhite.png';
import AddBackground from '../WhiteMenu/AddBackgroundWhite.png';
import SearchBackground from '../WhiteMenu/SearchBackgroundWhite.png';
import { ListBox } from 'primereact/listbox';
import {Link, useLocation } from 'react-router-dom';
import Navbar from "./Navbar";


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
    <Navbar/>
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
    <div className="Spacework2 ">
        
           <img src={CalendarBackground} alt="" className="CalendarBackground-Style  " />
           <div className="Calendar  ">
           <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />
           </div>
    <img src={SearchBackground} alt="" className="SearchBackground-Style " />
    

    </div>
    <div className="EmptyBar"></div>
  
         
    </div>
     
    
  );
};

export default Admin;
