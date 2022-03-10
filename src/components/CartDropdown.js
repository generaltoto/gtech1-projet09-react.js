import {
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  Row,
  Col,
  Button
} from 'react-bootstrap'
import ArticleInCart from "./article/ArticleInCart";

function CartDropdown (props) {
  return (
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

              {/* <Dropdown.Divider/>
              <Dropdown.Text>TOTAL : {Number(props.cart.)}</Dropdown.Text> */}
              <Dropdown.Divider/>
              <Row>
                <Col className='text-center' xs={6}><Button onClick={props.disp}>See Cart</Button></Col>
                <Col className='text-center'><Button>Clear Cart</Button></Col>
              </Row>

            </Row>
          </Container>
        </Nav.Item>
      </DropdownButton>
    </Container>
  );
}

export default CartDropdown;