import { Nav, Navbar } from "rsuite";
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import 'rsuite/dist/rsuite.min.css';
import Sidebar from "../../pages/Sidebar";
const CustomNavbar=()=>{
    return(
        <Navbar>
        <Navbar.Brand href="#">RSUITE</Navbar.Brand>
        <Nav>
        <Nav.Item><Sidebar/></Nav.Item>
          <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
          <Nav.Item>Courses</Nav.Item>
          <Nav.Item>Institution</Nav.Item>
          {/* <Nav.Menu title="About"> */}
            {/* <Nav.Item>Company</Nav.Item> */}
            <Nav.Item>Student</Nav.Item>
            <Nav.Menu title="Contact">
              <Nav.Item>Via email</Nav.Item>
              <Nav.Item>Via telephone</Nav.Item>
            {/* </Nav.Menu> */}
          </Nav.Menu>
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
        </Nav>
      </Navbar>
    );
    
}
export default CustomNavbar