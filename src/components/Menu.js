import { 
  Nav,
  Dropdown,
  Container,
  Row,
  Col
} from 'react-bootstrap'
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import ArticleInCart from "./ArticleInCart";

function Menu(props) {
  return (
    <>
      <Nav className="justify-content-end navbar" activeKey="/home">
        <Nav.Item>
          <Link className="navbar-text justify-content-start" to='/'>MineStone</Link>
        </Nav.Item>
        <Nav.Item className="justify-content-end">
          <Dropdown>
            <Dropdown.Toggle className="dropdown-toggle" id='dropdown-split-basic'>
              <Link className="navbar-icon" to='/Store'><FontAwesomeIcon icon={faCartShopping} size='2x' /></Link>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown">
              <Dropdown.Header className="dropdown-header">Your Cart</Dropdown.Header>
              <Container>
                <Row>
                {props.stone.data && props.stone.data.map((stone, i)=>
                  <Col className='article'><ArticleInCart stone={stone}/></Col>)}
                  
                  {/* <button onClick={() => props.getArticle()}> Get Data </button>*/}
                </Row>
              </Container>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default Menu;