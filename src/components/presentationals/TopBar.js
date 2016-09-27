import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const TopBar = ({ handleRefresh }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a className="ellipsis">React-Redux-D3 Example</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#" onClick={handleRefresh}>
          <img alt="refresh" className="refresh" src="/images/refresh.svg"/>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

TopBar.propTypes = {
  handleRefresh: React.PropTypes.func.isRequired
}

export default TopBar
