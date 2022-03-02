import React, { Component } from 'react';
import Menu from './components/Menu';

class Home extends Component {
  constructor(props) {
  super(props);
    this.state = {
      result: null
    }
  }

  render(){
      return (
        <Menu />
      );
  }
}

export default Home;