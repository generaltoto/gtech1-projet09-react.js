import { 
  Card,
  Button,
  Row,
  Col
 } from 'react-bootstrap'

function ArticleInModal(props){
  return(
    props.cart.length>0 && props.cart.map((data, i)=>(
      <Card key={i} className='modal-cart-card'>
        <Card.Header > <Card.Title className='text-center'>{data.attributes.name}</Card.Title> </Card.Header>
        <Card.Body>
          <Row>
            <Col xs={6}><Card.Img className='img-article' variant="top" src={data.attributes.img && "http://localhost:1337"+data.attributes.img.data.attributes.url} /></Col>
            <Col xs={{span: 5, offset: 1}}>
              <Card.Text>{data.attributes.description}</Card.Text>
              <Card.Text>Stone MOHS : {data.attributes.mohs}</Card.Text>
            </Col>
          </Row>
          
        </Card.Body>
        <Card.Footer>
          {props.cart.some(item => item.id === data.id)
              ? <Button className='btn-sm btn-danger' style={{ marginLeft: '0.4rem' }} width="auto" variant="primary" onClick={() => { props.removeArticle(data) }}>Remove from Cart</Button>
              : ''
          }
          <Card.Text className='modal-price'>Price : {data.attributes.price}€</Card.Text>
        </Card.Footer>
      </Card>
    ))
  );
}

export default ArticleInModal;