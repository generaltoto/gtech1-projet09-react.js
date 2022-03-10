import { useState } from 'react';
import {
  Card,
  Button,
  Modal,
  Row,
  Col
} from 'react-bootstrap'

function Article(props){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
      <>
        <Card style={{ width: '13rem'}}>
          <Card.Header> 
            <Card.Img className='img-article' variant="top" src={props.stone.attributes.img && "http://localhost:1337"+props.stone.attributes.img.data.attributes.url} />
          </Card.Header>
          <Card.Body onClick={handleShow} className='hover'>
            <Card.Title className='center-align'>{props.stone.attributes.name}<p>{props.stone.attributes.price}€</p></Card.Title>
          </Card.Body>
        </Card>

        <Modal className='modal-article' show={show} onHide={handleClose}>
          <Modal.Header closeButton className='center-align'>
            <Modal.Title>{props.stone.attributes.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <Card.Img className='img-article' variant="top" src={props.stone.attributes.img && "http://localhost:1337"+props.stone.attributes.img.data.attributes.url} />
              </Col>
              <Col>
                {props.stone.attributes.description}
                <Card.Text>Stone MOHS : {props.stone.attributes.mohs}</Card.Text>
                <Modal.Title className='modal-article-price text-center'>{props.stone.attributes.price}€</Modal.Title>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className='modal-article-footer'>
            <Button variant="outline-info" onClick={()=>props.addArticle(props.stone)}>Add to cart</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default Article;