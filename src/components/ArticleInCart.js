import { ListGroup} from 'react-bootstrap'

function ArticleInCart(props){
  return(
    <ListGroup>
      <ListGroup.Item>{props.cart.attributes.name} : {props.cart.attributes.price}€</ListGroup.Item>
    </ListGroup>
  );
}

export default ArticleInCart;