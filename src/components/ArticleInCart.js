import { ListGroup} from 'react-bootstrap'

function ArticleInCart(props){
  return(
    <>
      <ListGroup>
        <ListGroup.Item>{props.cart.attributes.name} : {props.cart.attributes.price}€</ListGroup.Item>
      </ListGroup>
      <Card className='cartArticle'>
        <Card.Header> <Card.Title>{props.cart.attributes.name}</Card.Title> </Card.Header>
        <Card.Body> <Card.Text>Price : {props.cart.attributes.price}</Card.Text> </Card.Body>
      </Card>
    </>
  );
}

export default ArticleInCart;