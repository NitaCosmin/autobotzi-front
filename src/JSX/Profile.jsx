import React, { useState } from "react";
import "../CSS/Profile.css";
import PhotoProfile from "../Imagini/PhotoProfile.png";
import {Link, useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import ProfileBkg from "../Imagini/ProfileBkg.png";
import AboutExpBkg from "../Imagini/AboutExpBkg.png";
import RoleBkg from "../Imagini/RoleBkg.png";
import SkillsBkg from "../Imagini/SkillsBkg.png";
import MessageImage from "../Imagini/MessageImage.png";

const Profile = () => {
   
    
  
  return (  
  
    <div className="ProfileContainer">
      <Navbar/> 
      <div className="ProfileItems">
        <div className="ProfileRow">
        <img src={ProfileBkg} alt="" className="ProfileBkg" />
        <div className="ProfileCollumn">
        <img src={PhotoProfile} alt="" className="PhotoProfile1" />
        </div>
        <div className="ProfileCollumn1">
        <p className="LabelInfoProfile">John Doe</p>
        <p className="NameLabelProfile">Name</p>
        <p className="LabelInfoProfile">johndoe123@gmail.com</p>
        <p className="NameLabelProfile">email</p>
        <div className="MessageRow">
        <img src={MessageImage} alt="" className="MessageImage" />  
        <p className="MessageLabel">Send message</p>

        </div>
        </div>
        </div>
        <div className="InfoRow">
            <div className="InfoCollumn1">
            <img src={RoleBkg} alt="" className="RoleBkg" />
            <p className="Role">Roles</p>
            <p className="RoleEdt">Edit Roles</p>
            <img src={SkillsBkg} alt="" className="SkillsBkg" />
            <p className="Skills">Skills</p>
            <p className="SkillsEdt">Edit Sklls</p>
            </div>
            <div className="InfoCollumn">
                <img src={AboutExpBkg} alt="" className="AboutExpBkg" />
                <p className="AboutExp">About Experience</p>
            </div>
        </div>
      </div>
      
    </div>
     
    
  );
};

export default Profile;
