import React, { Component } from 'react';
import Menu from './components/Menu';
import {
  Container
} from 'react-bootstrap'

class Home extends Component {
  constructor(props) {
  super(props);
    this.state = {
      result: null
    }
  }

  render(){
      return (
        <div>
          <Menu />
          <Container>
            
          </Container>
        </div>
      );
  }
}

export default Home;