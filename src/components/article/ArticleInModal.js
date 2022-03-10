import { 
  Card,
  Button
 } from 'react-bootstrap'

function ArticleInModal(props){
  return(
    props.cart.length>0 && props.cart.map((data, i)=>(
      <Card key={i}>
        <Card.Header> <Card.Title className='text-center'>{data.attributes.name}</Card.Title> </Card.Header>
        <Card.Body>
          <Card.Text>{data.attributes.description}</Card.Text>
          <Card.Text className='modal-price'>Price : {data.attributes.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
        {props.cart.some(item => item.id === data.id)
            ? <Button className='btn-sm btn-danger' style={{ marginLeft: '0.4rem' }} width="auto" variant="primary" onClick={() => { props.removeArticle(data) }}>Remove from Cart</Button>
            : ''
        }
        </Card.Footer>
      </Card>
    ))
  );
}

export default ArticleInModal;