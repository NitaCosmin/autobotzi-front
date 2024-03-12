import React, { useState } from "react";
import "../CSS/DepartmentCard.css";
import DepartmentCardBackground from "../DepartmentCard-images/DepartmentCardBeckground.png";
import DepProfileImage from "../DepartmentCard-images/DepProfileImage.png";
import { Button } from 'primereact/button';

const DepartmentCard = () => {
    
  
  return (  
   
    <div className="DepCardContainer">
      <img src={DepartmentCardBackground} alt="" className="DepBeckgroundCard-Style" />
      <div className="DepCardContent">
        <img src={DepProfileImage} alt="" className="DepImg-Style" />
        <div className="DepCardFields">
          <div className="FildGap">
            <div className="FieldContentLabel">Desing</div>
            <div className="FieldNameLabel">Department Name</div>
          </div>
          <div className="FildGap">
            <div className="FieldContentLabel">Dorel</div>
            <div className="FieldNameLabel">Department Manager</div>
          </div>
          <div className="FildGap">
            <div className="FieldContentLabel">15</div>
            <div className="FieldNameLabel">Members</div>
          </div>
        </div>
        <div className="expendbutton">
            <Button label=">" />
        </div>
      </div>
      

    </div>
    
    
    
        
    
     
    
  );
};

export default DepartmentCard;
