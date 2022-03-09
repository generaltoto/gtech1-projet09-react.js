import { Component } from "react"
import {
  Nav,
  Dropdown,
  ButtonGroup
} from 'react-bootstrap'
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

class Menu extends Component {
  render(){
    return (
      <>
        <Nav className="justify-content-end navbar" activeKey="/home">
          <Nav.Item>
            <Link to='/' className="navbar-text">MineStone</Link>
          </Nav.Item>
          <Nav.Item>
            <Dropdown as={ButtonGroup}>
              <Link className="navbar-icon" to='/Store'><FontAwesomeIcon icon={faCartShopping} size='2x' /></Link>

              <Dropdown.Toggle className="dropdown-toggle" id="dropdown-split-basic" />

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
        </Nav>
      </>
      
      
    )
  }
}

export default Menu;