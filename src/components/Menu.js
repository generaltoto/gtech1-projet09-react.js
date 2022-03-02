import { Component } from "react"
import {
  Navbar,
  Container
} from 'react-bootstrap'

class Menu extends Component {
  
  render(){
    return(
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Les Perles
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
  }
}

export default Menu;