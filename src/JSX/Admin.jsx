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
import { MdAdd } from "react-icons/md";


const Admin = () => {
   
    const [date, setDate] = useState(null);
    
  
  return (  
  
    <div className="AdminContainer">
      <Navbar/> 
      <div className="DepList">
      <div className="AddRow">
      <div className="namePageDep"><p className="titleDep">Departments</p></div>
                <div className="addDep"><Link><MdAdd/></Link></div>
      </div>
      <div className="DepListContainer">
      
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
      </div>
      <div className="OthersContainer">
        
      </div>
    </div>
     
    
  );
};

export default Admin;
