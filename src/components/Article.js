
import {
  Card,
  Button
} from 'react-bootstrap'
import { Link } from "react-router-dom";

function Article(props){
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
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