import { 
  Navbar,
  Nav,
  Col,
  Modal,
  Form,
  Row,
  Button
} from 'react-bootstrap'
import { useState } from 'react';

import CartDropdown from './CartDropdown';
import ArticleInModal from './article/ArticleInModal'

function Menu(props) {
  //CART MODAL
  const [open, opened] = useState(false);
  const close = () => opened(false);
  const disp = () => opened(true);

  //ARTICLE MODAL
  const [usedname, setUsedname] = useState("");

  return (
    <>
    <Navbar className='navbar'>
      <Nav className='nav-title-container'>
        <Nav.Item className="navbar-text">MineStone</Nav.Item>
      </Nav>
      <CartDropdown cart={props.cart} disp={disp} />
    </Navbar>

    <Modal
      show={open}
      onHide={close}
      className='modal-cart' >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"> Your Cart </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12}><ArticleInModal cart={props.cart} removeArticle={props.removeArticle}/></Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Form.Control className="me-auto" placeholder="Enter your name to command" onChange={event => setUsedname(event.target.value)} required />
        <p>Total :</p> {props.globalprice} <p>€</p>
        <Button variant="primary" onClick={()=>props.postCommand(usedname)}>
          Command
        </Button>
        <Button variant='outline-info' onClick={close}>Close</Button>
      </Modal.Footer>
    </Modal>      
    </>
  )
}

export default Menu;