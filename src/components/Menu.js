import { 
  Navbar,
  Nav,
  Dropdown,
  Container,
  Row,
  Col,
  Modal,
  Form,
  DropdownButton,
  Button
} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import ArticleInCart from "./ArticleInCart";

function Menu(props) {

  const [show, setShow] = useState(false);
  const [usedname, setUsedname] = useState("");
  const globalprice = props.getArticle().reduce((previous, next) => previous + next, 0);
  console.log(props.getArticle());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                  <Col xs={6}><Button onClick={handleShow}>See Cart</Button></Col>
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

      <Modal className='modal-cart' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.getArticle() && props.getArticle().map((data)=>(
            <Col className='article'><ArticleInCart cart={data}/></Col>
          ))}
          <Form.Control value={globalprice} className="type-price" />
          <Form.Control className="me-auto" placeholder="Enter your name to command" onChange={event => setUsedname(event.target.value)} required />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-info" onClick={()=>props.postCommand(usedname, globalprice)}>
            Command
          </Button>
        </Modal.Footer>
      </Modal>
                  
    </>
  )
}

export default Menu;