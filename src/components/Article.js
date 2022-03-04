
import { useState } from 'react';
import {
  Card,
  Button,
  Modal,
} from 'react-bootstrap'

function Article(props){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
      <>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={props.stone.attributes.img} />
          <Card.Body>
            <Card.Title>{props.stone.attributes.name}</Card.Title>
            <Button variant="primary" onClick={handleShow}>Show more</Button>
          </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.stone.attributes.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.stone.attributes.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>props.addArticle(props.stone)}>
            Add to cart
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
}

export default Article;