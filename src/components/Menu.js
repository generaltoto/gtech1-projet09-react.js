import { Component } from "react"
import {
  Navbar,
  Container, 
  Row, 
  Col
} from 'react-bootstrap'
import { Link } from "react-router-dom";

class Menu extends Component {
  
  render(){
    return(
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="/logo.png"
                width="30"
                height="50"
                className="d-inline-block align-top"
              />{' '}
            <h1>MineStone</h1>
            </Navbar.Brand>
          </Container>
        </Navbar>
    )
  }
}

export default Menu;