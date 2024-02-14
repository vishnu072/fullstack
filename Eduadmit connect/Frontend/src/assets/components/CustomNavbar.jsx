import { Nav, Navbar } from "rsuite";
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import 'rsuite/dist/rsuite.min.css';
import Sidebar from "../../pages/Sidebar";
import {Link} from 'react-router-dom';
const CustomNavbar=()=>{
    return(
        <Navbar>
        <Nav>
       <Nav.Item icon={<HomeIcon />}><Link to={'/Home'} >Home</Link></Nav.Item>
          <Nav.Item ><Link to={'/Enroll'} >Courses</Link></Nav.Item>
          <Nav.Item><Link to={'/Cor'} >Institution</Link></Nav.Item>
           <Nav.Item><Link to='/about'>About us</Link></Nav.Item>
            {/* <Nav.Item>Student</Nav.Item> */}
            <Nav.Item>Contact</Nav.Item>        
        </Nav>
        <Nav pullRight>
          {/* <Nav.Item icon={<CogIcon />}>Settings</Nav.Item> */}
        </Nav>
      </Navbar>
    );   
}
export default CustomNavbar