import { 
  Navbar,
  Nav,
  Dropdown,
  Container,
  Row,
  Col,
  DropdownButton,
  Button
} from 'react-bootstrap'
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import ArticleInCart from "./ArticleInCart";

function Menu(props) {
  return (
    <>
    <Navbar className='navbar'>
      <Nav className='nav-title-container'>
        <Nav.Item className="navbar-text">MineStone</Nav.Item>
      </Nav>
      <Container className="mb-2 justify-content-end dropdown-container">
        <DropdownButton
          key={'start'}
          id={`dropdown-button-drop-start`}
          drop={'start'}
          title={`Cart`}
        >
          <Nav.Item className='dropdown'>
            <Dropdown.Header className="dropdown-header">Your Cart</Dropdown.Header>
            <Container>
              <Row>
              {props.cart.length>0 && props.cart.map((data, i)=>(
                <Col xs={12} className='article' key={i}><ArticleInCart cart={data}/></Col>))}
                
                <Dropdown.Divider/>
                <Row>
                  <Col xs={6}><Button>See Cart</Button></Col>
                  <Col><Button onClick={() => localStorage.clear()}>Clear Cart</Button></Col>
                </Row>
                
                {/* <button onClick={() => console.log(props.getArticle())}> Check Article </button>
                <button onClick={() => localStorage.clear()}> Clear Cart </button> */}
              </Row>
            </Container>
          </Nav.Item>
        </DropdownButton>
      </Container>
    </Navbar>
    </>
  )
}

export default Menu;