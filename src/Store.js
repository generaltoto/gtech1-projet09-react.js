
import Menu from './components/Menu';
import {
  Container,
  Spinner,
  Row,
  Col
} from 'react-bootstrap'
import Article from './components/Article';
import Pub from './components/Pub';


function Store(props){
   if(props.loading){ {/*Loader*/}
      return <Spinner animation="grow" />
    }
      return (
        <>
          <Menu />
          <Row>
            <Col md={1}></Col>
            <Col md={1}>{/*<Pub />*/}</Col>
            <Col xs={12} md={2}>
              <p>Ici les filtres soon</p>
            </Col>

            <Col xs={12} md={8}>
              <Row>
                {/*pour afficher en tableau simple les articles*/}
                {props.stone.data && props.stone.data.map((stone, i)=>
                  <Col><Article stone={stone} addArticle={props.addArticle}/></Col>
                )}
                {/*Mettre les artciles en paramètres*/}
              </Row>
            </Col>
          </Row>
        </>
      );
  }

export default Store;