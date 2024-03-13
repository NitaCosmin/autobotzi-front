import React from "react";

import "../CSS/Navbar.css";

import MenuBar from '../WhiteMenu/MenuBarWhite.png';
import ExitIcon from '../Imagini/ExitIcon.png';
import HomeIcon from '../Imagini/HomeIcon.png';
import SquareIcon from '../Imagini/ProjectsIcon.png';
import NotificationIcon from '../Imagini/NotificationIcon.png';
import TeamIcon from '../Imagini/DepartmentsIcon.png';
import UserIcon from '../Imagini/UserIcon.png';
import { IoMdExit } from "react-icons/io";


import {Link, useLocation } from 'react-router-dom';





function Navbar(){

  const location = useLocation();


return (
  <> 
     <div className='sidebar'>   
      <ul id='navbar'>

      <li className={location.pathname === '/apphome' ? 'active' : ''}>
            <a href="/apphome">
                    <img src={HomeIcon} alt='/apphome' className="MenuIcons" />
                </a>
            <span className='tooltip'>Home</span>
      </li>

      <li className={location.pathname === '/projects' ? 'active' : ''}>
            <a href="/projects">
                    <img src={SquareIcon} alt='/projects' className="MenuIcons" />
                </a>
            <span className='tooltip'>projects</span>
      </li>

      <li className={location.pathname === '/user' ? 'active' : ''}>
            <a href="/admin">
                    <img src={UserIcon} alt='/user' className="MenuIcons" />
                </a>
            <span className='tooltip'>user</span>
      </li>

      <li className={location.pathname === '/admin' ? 'active' : ''}>
            <a href="/admin">
                    <img src={TeamIcon} alt='/admin' className="MenuIcons" />
                </a>
            <span className='tooltip'>departments</span>
      </li>

      <li className={location.pathname === '/admin' ? 'active' : ''}>
            <a href="/admin">
                    <img src={NotificationIcon} alt='/message' className="MenuIcons" />
                </a>
            <span className='tooltip'>Message</span>
      </li>

      <li className={location.pathname === '/' ? 'active' : ''}>
            <a href="/admin">
                    <img src={ExitIcon} alt='/' className="MenuIcons" />
                </a>
            <span className='tooltip'>Exit</span>
      </li>

      </ul>
      
  </div> 
  </>
);

};
export default Navbar;