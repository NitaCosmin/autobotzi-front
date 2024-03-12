import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import "../CSS/Admin.css";
import "../CSS/Calendar.css";

import CalendarBackground from '../WhiteMenu/CalendarBackgroundWhite.png';
import AddBackground from '../WhiteMenu/AddBackgroundWhite.png';
import SearchBackground from '../WhiteMenu/SearchBackgroundWhite.png';
import { ListBox } from 'primereact/listbox';
import {Link, useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import DepartmentCard from "../JSX/DepartmentCard";


const Admin = () => {
   
    const [date, setDate] = useState(null);
    
  
  return (  
  
    <div className="AdminContainer">
      <Navbar/> 
      <div className="DepListContainer">
      <div className="AddRow">
        <label className="DepLabel">My Label</label>
      </div>
      <DepartmentCard/>
      <DepartmentCard/>
      <DepartmentCard/>
      <DepartmentCard/>
      <DepartmentCard/>
      <DepartmentCard/>
      <DepartmentCard/>
      <DepartmentCard/>
      <DepartmentCard/>
      <DepartmentCard/>
      <DepartmentCard/>
      <DepartmentCard/>
      <DepartmentCard/>
      <DepartmentCard/>
      <DepartmentCard/>
      <DepartmentCard/>
      </div>
      <div className="OthersContainer">
        
      </div>
    </div>
     
    
  );
};

export default Admin;
