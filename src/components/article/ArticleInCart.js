import { ListGroup } from 'react-bootstrap'

function ArticleInCart(props){
  return(
    <>
      <ListGroup>
        <ListGroup.Item className=''>{props.cart.attributes.name} : {props.cart.attributes.price}€</ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default ArticleInCart;