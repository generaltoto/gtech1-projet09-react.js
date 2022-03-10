import { 
  Nav,
  Dropdown,
  Container,
  Row,
  Col,
  Modal,
  Form,
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
      <Nav className="justify-content-end navbar" activeKey="/home">
        <Nav.Item>
          <Link className="navbar-text justify-content-start" to='/'>MineStone</Link>
        </Nav.Item>
        <Nav.Item className="justify-content-end">
          <Dropdown>
            <Dropdown.Toggle className="dropdown-toggle">
              <Link className="navbar-icon" to={'/'}><FontAwesomeIcon icon={faCartShopping} size='2x' /></Link>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown">
              <Dropdown.Header className="dropdown-header">Your Cart</Dropdown.Header>
              <Container>
                <Row>
                  {props.getArticle() && props.getArticle().map((data)=>(
                    <Col className='article'><ArticleInCart cart={data}/></Col>
                  ))}
                    
                    <button onClick={handleShow}> Check Command </button>
                    <button onClick={() => localStorage.clear()}> Clear Cart </button>
                </Row>
              </Container>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Item>
      </Nav>

      <Modal className='modal-cart' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.getArticle() && props.getArticle().map((data)=>(
            <Col className='article'><ArticleInCart cart={data}/></Col>
          ))}
          <Form.Control value={globalprice} className="type-price" />
          <Form.Control className="me-auto" placeholder="Enter your name ..." onChange={event => setUsedname(event.target.value)} required />
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