
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
import { Parallax, Background } from 'react-parallax';


function Store(props){
   
      return (
        <>
          <Menu />
          <Parallax
            blur={2}
            bgImage={require('./gemmes.jpg')}
            bgImageAlt="gemstones"
            strength={200}>
            <div className='titles'>
              <h1>MineStone</h1>
              <h2>Make the stones yours</h2>
            </div>
            <div style={{ height: '250px' }} />
          </Parallax>
          <div style={{ height: '100px' }}>
            <h3>Get them</h3>
          </div>
          <Row id='articles' className='canceled'>
            <Col xs={3} className='filters'>
              <h4>Add filters</h4>
              <Form.Control className="me-auto" placeholder="Search ..." />
              <Form.Label>Price</Form.Label>
              <Form.Range />
            </Col>

            <Col xs={12} md={9}>
              <Container className='all-articles'>
                <Row>
                  {/*props.loading =>   
                     <Spinner animation="grow" />
                  */}
                  {/*pour afficher en tableau simple les articles*/}
                  {props.stone.data && props.stone.data.map((stone, i)=>
                    <Col className='article'>
                      <Article stone={stone} addArticle={props.addArticle}/>
                    </Col>
                  )}
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