import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {React, Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Store from './Store';
import { clear } from '@testing-library/user-event/dist/clear';


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
    const reponse = await fetch('http://localhost:1337/api/gemstones?populate=*',{method:'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const stones = await reponse.json()
    this.setState({stone:stones, loading:false})
  }

  addArticle = async (stone) =>{
    this.setState({
      cart:[
        ...this.state.cart,
        stone
      ]
    },()=>{
      console.log(this.state.cart)
      localStorage.setItem('cart', JSON.stringify(this.state.cart))
    });
  }

  postCommand = async (name,globalprice) => {
    if(!localStorage.getItem('cart')){
      return []
    }
    const reponse = await fetch('http://localhost:1337/api/commands',{
      method:'POST', 
      headers: {'Accept': 'application/json', 'Content-Type':'application/json'},
      body:{
        gemstones:localStorage.getItem('cart'),
        name:name,
        globalprice:globalprice
      }
    })
  }

  getArticle() {
    if(!localStorage.getItem('cart')){
      return []
    }
    let data = JSON.parse(localStorage.getItem('cart'));
    return data;
  }

  render(){
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Store 
            stone={this.state.stone} 
            loading={this.state.loading} 
            cart={this.state.cart} 
            addArticle={this.addArticle}
            getArticle={this.getArticle}
          />}
          />
        </Routes>
      </Router>
    )
  }
}
export default App;
