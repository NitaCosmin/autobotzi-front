import './Navbar.css';
import { FaHome } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { BsBellFill } from "react-icons/bs";
import { FaUsers ,FaUserLarge } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import TeamFinderIcon from '../Imagini/TeamFinderIcon.png';
import { useLocation } from 'react-router-dom';




import { Link } from 'react-router-dom';


function Navbar(){

        const location = useLocation();


    return (
        <> 
           <div className='sidebar'>   
            <ul id='navbar'>
                
                 <li className='logo'> <img src={TeamFinderIcon} alt="" className="" /> 
                        <span className='tooltip'>Team Finder</span>
                </li>

                 <li className={location.pathname === '/admin' ? 'active' : ''}><Link to="/admin"><FaHome /></Link>
                        <span className='tooltip'>user</span>
                </li>
                <li className={location.pathname === '/admin' ? 'active' : ''}><Link to="/admin"><RiDashboardFill /></Link>
                        <span className='tooltip'>user</span>
                </li>
                <li className={location.pathname === '/admin' ? 'active' : ''}><Link to="/admin"><BsBellFill /></Link>
                        <span className='tooltip'>user</span>
                </li>
                <li className={location.pathname === '/test' ? 'active' : ''}><Link to="/test"><FaUsers /></Link>
                        <span className='tooltip'>user</span>
                </li>
                <li className={location.pathname === '/admin' ? 'active' : ''}><Link to="/admin"><FaUserLarge /></Link>
                        <span className='tooltip'>user</span>
                </li>

                <li className={location.pathname === '/' ? 'active' : ''}><Link to="/"><BiLogOut /></Link>
                        <span className='tooltip'>logout</span>
                </li>


            </ul>
            
        </div> 
        </>
    );

};
export default Navbar;