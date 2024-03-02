import React from "react";
import "../CSS/SignUp.css";
import HomeBackground from '../Imagini/HomeBackground.png';
import Separator from '../Imagini/Separator.png';
import Line from '../Imagini/Line.png';
import Ellipse from '../Imagini/Ellipse.png';



const SignUp = () => {
  
    
  return (  
  
    <div className="HomeContainer-SingUp">
          <img src={HomeBackground} alt="" className="HomeBackground-STYLE-SingUp" />
          <div className="HomeContent-SingUp">
          <img src={Line} alt="" className="Line-STYLE-SingUp" />
          <img src={Line} alt="" className="Line1-STYLE-SingUp" /> 
          <img src={Ellipse} alt="" className="Ellipse-STYLE-SingUp" />
          <img src={Ellipse} alt="" className="Ellipse1-STYLE-SingUp" />
          <img src={Ellipse} alt="" className="Ellipse2-STYLE-SingUp" />
          <div className="NameLabel-SingUp">Team Finder</div>
          <div className="ChoiceLabel-SingUp">Sign/Up</div>
          <button type="submit" class="button-SignUp">Submit</button>
          <div className="Collumn-Input-SingUp">
          <input type="text" className="textbox-SingUp" id="name" name="name" placeholder="Name" required/>
          <input type="email" className="textbox-SingUp" id="email" name="email" placeholder="E mail" required/>
          <input type="password" className="textbox-SingUp" id="password" name="password" placeholder="Password" required/>
          <input type="text" className="textbox-SingUp" id="org_name" name="org_name" placeholder="Organization Name" />
          <input type="text" className="textbox-SingUp" id="HQadress" name="HQadress" placeholder="HeadQuarter Adress" />
          </div>
          </div>
  
         
    </div>
     
    
  );
};

export default SignUp;
