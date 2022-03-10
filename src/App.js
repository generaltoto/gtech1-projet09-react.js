import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {React, Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Store from './Store';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      stone : [],
      cart : [],
      globalprice : 0,
      loading:true
    }
  };

  componentDidMount = async () => {
    const reponse = await fetch('http://localhost:1337/api/gemstones?populate=*',{method:'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const stones = await reponse.json()
    this.setState({stone:stones, loading:false})
    if (localStorage.getItem('cart') !== null) {
      this.setState({
        cart: JSON.parse(localStorage.getItem('cart')),
      })
    } 
    if (localStorage.getItem('globalprice') !== null){
      this.setState({globalprice: JSON.parse((localStorage.getItem('globalprice')))})
    }
  }

  addArticle = async (stone) =>{
    this.setState({
      cart:[
        ...this.state.cart,
        stone
      ],
      globalprice : this.state.globalprice + stone.attributes.price
    },()=> localStorage.setItem('cart', JSON.stringify(this.state.cart)), ()=>{localStorage.setItem('globalprice', JSON.stringify(this.state.globalprice))}
    );
  }

  removeArticle = async (articleToRemove) => {
    let index = this.state.cart.findIndex(item => item === articleToRemove)
    const tempCart = [...this.state.cart]
    if (index >= 0) {
      tempCart.splice(index, 1)
      this.setState({
        cart: [...tempCart],
        globalprice : this.state.globalprice - articleToRemove.attributes.price
      }, () => localStorage.setItem('cart', JSON.stringify(this.state.cart)), ()=>localStorage.setItem('globalprice', JSON.stringify(this.state.globalprice)))
  }
}

  postCommand = async (name) => {
    if(!localStorage.getItem('cart')){
      return []
    }
    const data = {
      gemstones:localStorage.getItem('cart'),
      name:name,
      globalprice:localStorage.getItem('globalprice')
    };
    const reponse = await fetch('http://localhost:1337/api/commands',{
      method:'POST', 
      headers: {'Accept': 'application/json', 'Content-Type':'application/json'},
      body:{ data}
    })
    localStorage.setItem('cart', JSON.stringify([]))
    localStorage.setItem('globalprice', JSON.stringify(0))
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
            globalprice={this.state.globalprice}  
            addArticle={this.addArticle}
            getArticle={this.getArticle}
            removeArticle={this.removeArticle}
            postCommand={this.postCommand}
          />}
          />
        </Routes>
      </Router>
    )
  }
}
export default App;
