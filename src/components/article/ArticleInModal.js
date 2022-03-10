import { 
  Card,
  Button,
  Row,
  Col
 } from 'react-bootstrap'

function ArticleInModal(props){
  return(
    <Row>
      {props.cart.length>0 && props.cart.map((data, i)=>(
        <Col lg="3" key={i}>
          <Card>
            
            <Card.Header> 
              <Card.Img className='img-cart' src={data.attributes.img && "http://localhost:1337"+data.attributes.img.data.attributes.url} />
              <Card.Title className='text-center'>{data.attributes.name}</Card.Title>
              <Card.Text className='modal-price'>Price : {data.attributes.price}</Card.Text>
            </Card.Header>


            <Card.Footer>
            {props.cart.some(item => item.id === data.id)
                ? <Button className='btn-sm btn-danger' style={{ marginLeft: '0.4rem' }} width="auto" variant="primary" onClick={() => { props.removeArticle(data) }}>Remove from Cart</Button>
                : ''
            }
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ArticleInModal;