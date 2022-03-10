import { Card } from 'react-bootstrap'

function ArticleInCart(props){
  return(
    <Card>
      <Card.Header> <Card.Title>{props.cart.attributes.name}</Card.Title> </Card.Header>
      <Card.Body>
        <Card.Text>Price : {props.cart.attributes.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ArticleInCart;