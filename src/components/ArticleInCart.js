import { Card } from 'react-bootstrap'

function ArticleInCart(props){
  return(
    <Card>
      <Card.Body>
        <Card.Title>{props.stone}</Card.Title>
        <Card.Text>{props.stone.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ArticleInCart;