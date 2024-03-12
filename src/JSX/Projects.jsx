import Navbar from "./Navbar";
import '../CSS/Projects.css';
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";


const Projects = () => {
  
    
   return(
    <div className="Container">
        <Navbar />
        <div className="workspaceProjects">

            <div className="headerProjects">
                <div className="namePageProject"><p className="titleProjects">Projects</p></div>
                <div className="addProjects"><Link><MdAdd/></Link></div>
            </div>
        </div>

    </div>


   );
      
    
  };
  
  export default Projects;