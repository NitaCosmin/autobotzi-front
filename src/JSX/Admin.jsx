import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import "../CSS/Admin.css";
import "../CSS/Calendar.css";
import RectangleBackground from "../Imagini/RectangleBackground.png";
import BigRectangleBackground from "../Imagini/BigRectangleBackground.png";
import EditIcon from "../Imagini/EditIcon.png";
import PhotoProfile from "../Imagini/PhotoProfile.png";
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
                <div className="addDep"><Link className="addDep"><MdAdd /></Link></div>
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
        <div className="ProfileRectangle">
         <img src={RectangleBackground} alt="" className="RectangleBackground" />
         <img src={EditIcon} alt="" className="EditIcon" />
         <p className="titleProfile">Profile</p>
         <img src={PhotoProfile} alt="" className="PhotoProfile" />
         <p className="AdmName">Nume</p>
         <p className="AdmEmail">exemplu@gmail.com</p>
        </div>
        
        <div className="CalendarRectangle">
        <div className="Calendar  ">
           <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek />
           </div>
        </div>
       
        <div className="EmployeeListConntainer">
         <div className="titleEmployee">Employer List</div>
         <div className="EmployeeList">
         <div className="EmployeeRow">
         <img src={PhotoProfile} alt="" className="EmployeeLstImg" />
         <p className="EmployeeLstName">I don t have a name lmao</p>
         </div>
         <div className="EmployeeRow">
         <img src={PhotoProfile} alt="" className="EmployeeLstImg" />
         <p className="EmployeeLstName">I don t have a name lmao</p>
         </div>
         <div className="EmployeeRow">
         <img src={PhotoProfile} alt="" className="EmployeeLstImg" />
         <p className="EmployeeLstName">I don t have a name lmao</p>
         </div>
         </div>
      </div>

     
        

      </div>
    </div>
     
    
  );
};

export default Admin;
