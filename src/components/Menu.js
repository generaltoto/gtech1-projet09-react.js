import { 
  Navbar,
  Nav,
  Modal,
  Button,
  Col,
  Row
} from 'react-bootstrap'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


import CartDropdown from './CartDropdown';
import {useState} from 'react';
import ArticleInModal from './article/ArticleInModal'

function Menu(props) {
  const [show, opened] = useState(false);

  const close = () => opened(false);
  const disp = () => opened(true);

  return (
    <>
    <Navbar className='navbar'>
      <Nav className='nav-title-container'>
        <Nav.Item className="navbar-text">MineStone</Nav.Item>
      </Nav>
      <CartDropdown cart={props.cart} disp={disp}/>
    </Navbar>

    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={close} >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"> Your Cart </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
           <Col xs={12}><ArticleInModal cart={props.cart} removeArticle={props.removeArticle}/></Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={close}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default Menu;