import React from 'react';
import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';

const panelStyles = {
  padding: '15px 20px',
  color: '#aaa',
};

const headerStyles = {
  padding: 20,
  fontSize: 16,
  background: '#34c3ff',
  color: '#fff',
};

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.x = 0;
  }

  openNav() {
    document.getElementById('mySidenav').style.width = '240px';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }

  sidebtn = () => {
    if (this.x === 0) {
      this.openNav();
      this.x++;
    } else {
      this.closeNav();
      this.x = 0;
    }
  };

  render() {
    return (
      <>
        <span className="span" style={{fontSize:25}} onClick={this.sidebtn} >
          &#9776;
        </span>
        <div
          className="mySidenav"
          id="mySidenav"
          style={{
            width: 0,
            position: 'fixed',
            zIndex: 1,
            left: 0,
            overflowX: 'hidden',
            paddingTop: 22,
            transition: '0.7s',
          }}
        >
          <Sidenav defaultOpenKeys={['3', '4']}>
            <Sidenav.Header>
              <div style={headerStyles}>CustomSidenav</div>
            </Sidenav.Header>
            <Sidenav.Body>
              <Nav>
                <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
                  Dashboard
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<GroupIcon />}>
                  User Group
                </Nav.Item>
                <Nav.Menu eventKey="3" title="Advanced" icon={<MagicIcon />}>
                  <Nav.Item divider />
                  <Nav.Item panel style={panelStyles}>
                    Reports
                  </Nav.Item>
                  <Nav.Item eventKey="3-1">Geo</Nav.Item>
                  <Nav.Item eventKey="3-2">Devices</Nav.Item>
                  <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                  <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                  <Nav.Item divider />
                  <Nav.Item panel style={panelStyles}>
                    Settings
                  </Nav.Item>
                  <Nav.Item eventKey="4-1">Applications</Nav.Item>
                  <Nav.Item eventKey="4-2">Channels</Nav.Item>
                  <Nav.Item eventKey="4-3">Versions</Nav.Item>
                  <Nav.Menu eventKey="4-5" title="Custom Action">
                    <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                    <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                  </Nav.Menu>
                </Nav.Menu>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </div>
      </>
    );
  }
}

export default Sidebar