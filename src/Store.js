
import Menu from './components/Menu';
import Footer from './components/Footer';
import {
  Container,
  Spinner,
  Row,
  Col,
  Form,
  ListGroup,
} from 'react-bootstrap'
import Article from './components/Article';
import { Parallax } from 'react-parallax';
import {useState} from "react";


function Store(props){

  const [query, setQuery] = useState("")
   
      return (
        <>
          <Menu />
          <Parallax
            blur={2}
            bgImage={require('./gemmes.jpg')}
            bgImageAlt="gemstones"
            strength={500}>
            <div className='titles'>
              <h1>MineStone</h1>
              <h2>Make the stones yours</h2>
            </div>
            <div style={{ height: '250px' }} />
          </Parallax>
          <div style={{ height: '100px' }} />
          <Row id='articles' className='canceled'>
            <Col xs={3} className='filters'>
              <h4>Add filters</h4>
              <Form.Control className="me-auto form" placeholder="Search by name ..." onChange={event => setQuery(event.target.value)} />
              <Form.Label className='form'>Price</Form.Label>
              <Form.Range />
              <Form.Label className='form'>Mohs</Form.Label>
              <Form.Range />
            </Col>

            <Col xs={12} md={9}>
              <Container className='all-articles'>
                <Row>
                  {/*props.loading =>   
                     <Spinner animation="grow" />
                  */}
                  {/*pour afficher en tableau simple les articles*/}
                  {props.stone.data && props.stone.data.filter(stones => {
                    if (query === '') {
                      return stones;
                    } else if (stones.name.toLowerCase().includes(query.toLowerCase())) {
                      return stones;
                    }}).map((stones, i)=>(
                      <Col className='article'>
                        <Article stone={stones} addArticle={props.addArticle}/>
                      </Col>
                    ))}
                  {/*Mettre les artciles en paramètres*/}
                </Row>
              </Container>
            </Col>
          </Row>
          <Footer />
        </>
      );
  }

export default Store;