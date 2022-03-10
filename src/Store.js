import Menu from './components/Menu';
import Footer from './components/Footer';
import {
  Container,
  Row,
  Col,
  Form
} from 'react-bootstrap'
import Article from './components/Article';
import { Parallax } from 'react-parallax';
import {useState} from "react";


function Store(props){

  const [search, setQuery] = useState("")
  const [price, setPrice] = useState(12000)
  const [mohs, setMohs] = useState(10)

  let filteredStones = props.stone.data

  if(props.stone.data){ 
    if(search.length>0){
      filteredStones = filteredStones.filter(stones => stones.attributes.name.toLowerCase().startsWith(search.toLowerCase()))
    }
    if(price<10000){
      filteredStones = filteredStones.filter(stones => stones.attributes.price <= price)
    }
    if(mohs<10){
      filteredStones = filteredStones.filter(stones => stones.attributes.mohs <= mohs)
    }
  }
      return (
        <>
          <Menu 
            cart={props.cart}
            addArticle={props.addArticle}
            getArticle={props.getArticle}
          />
          <Parallax
            blur={5}
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
              <Container>
                <h4>Add filters</h4>
                <Form.Control className="me-auto" placeholder="Search by name ..." onChange={event => setQuery(event.target.value)} />
                <Form.Label className='form'>Max Price : 
                  <Form.Control value={price} className="me-auto type-price" onChange={event => setPrice(event.target.value)} />
                </Form.Label>
                <Form.Range value={price} max={12000}  onChange={event => setPrice(event.target.value)} />
                <p>0 - 12000€</p>
                <Form.Label className='form'>Max Mohs : {mohs}</Form.Label>
                <Form.Range defaultValue={10} max={10} onChange={event => setMohs(event.target.value)}/>
                <p>0 - 10</p>
              </Container>
            </Col>

            <Col xs={12} md={9}>
              <Container className='all-articles'>
                <Row>
                  {/*props.loading =>   
                     <Spinner animation="grow" />
                  */}
                  {/*pour afficher en tableau simple les articles*/}
                  {filteredStones && filteredStones.map((stones, i)=>(
                      <Col className='article' key={i}>
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