
import {
  Card,
  Button
} from 'react-bootstrap'

function Article(props){
  return(
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.stone.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary" onClick={()=>props.addArticle(props.stone)}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Article;