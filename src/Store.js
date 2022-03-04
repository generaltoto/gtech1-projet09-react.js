
import Menu from './components/Menu';
import {
  Container,
  Spinner
} from 'react-bootstrap'
import Article from './components/Article';


function Store(props){
    if(props.loading){
      return <Spinner animation="grow" />
    }
      return (
        <>
          <Menu />
          <h1>Store</h1>
          <Container>
            {/*pour afficher en tableau simple les articles*/}
            {this.state.stone.data && this.state.stone.data.map((stone, i)=><div key={i}>{stone.attribute.name}</div>)}
            <Article cart={props.state.cart} 
            addArticle={props.addArticle}/> {/*Mettre les artciles en paramètres*/}
          </Container>
        </>
      );
  }

export default Store;