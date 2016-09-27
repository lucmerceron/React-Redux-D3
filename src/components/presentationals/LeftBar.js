import React from 'react'

import { Nav, NavItem } from 'react-bootstrap'
import { browserHistory } from 'react-router'

const LeftBar = ({ pathname }) => (
  <Nav bsStyle="pills" stacked>
    <NavItem eventKey={1} active={pathname === '/'} onClick={() => browserHistory.push('/')}>Home</NavItem>
    <NavItem eventKey={2} active={pathname === '/dashboard-one'} onClick={() => browserHistory.push('/dashboard-one')}>Dashboard1</NavItem>
    <NavItem eventKey={3} active={pathname === '/dashboard-two'} onClick={() => browserHistory.push('/dashboard-two')}>Dashboard2</NavItem>
  </Nav>
)

LeftBar.propTypes = {
  pathname: React.PropTypes.string.isRequired
}

export default LeftBar
