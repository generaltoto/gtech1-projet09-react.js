import { Component } from "react"
import {
  Nav,
  Navbar,
  Container,
} from 'react-bootstrap'
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

class Menu extends Component {
  
  render(){
    return (
      <>
        <Navbar className="navbar">
          <Container>
            <Navbar.Brand><Link to='/' className="navbar-text">MineStone</Link></Navbar.Brand>
            <Nav className="navbar-icons">
              <Link className="navbar-icon" to='/Store'><FontAwesomeIcon icon={faCartShopping} size='2x' /></Link>
            </Nav>
          </Container>
        </Navbar>
      </>
      
      
    )
  }
}

export default Menu;