import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {React, Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home';
import Store from './Store';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      stone : [],
      cart : [],
      loading:true
    }
  };

  componentDidMount = async () => {
    const reponse = await fetch('http://localhost:1337/api/gemstones',{method:'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const stones = await reponse.json()
    this.setState({stones:stones, loading:false})
  }

  addArticle = (stone) =>{
    this.setState({
      cart:[
        ...this.state.cart,
        stone
      ]
    });
  }


  render(){
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home cart={this.state.cart} />} /> {/*mettre en paramètres les articles*/}
          <Route path='/store' element={<Store stone={this.state.stone} 
            loading={this.state.loading} 
            cart={this.state.cart} 
            addArticle={this.addArticle} />} 
          />
        </Routes>
      </Router>
    )
  }
}
export default App;
