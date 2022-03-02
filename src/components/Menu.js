import { Component } from "react"
import {
  Navbar,
  Container
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
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Les Perles
          </Navbar.Brand>
          <Link to="/home">Home</Link> {/*Links to pages, not good pass*/}
          <Link to="/store">Store</Link>
        </Container>
      </Navbar>
    )
  }
}

export default Menu;