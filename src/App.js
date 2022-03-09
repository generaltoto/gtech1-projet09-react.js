import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {React, Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Store from './Store';
import Menu from './components/Menu';
import Footer from './components/Footer';


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
    },()=>console.log(this.state.cart));
    sessionStorage.setItem('cart', JSON.stringify(this.cart))
  }
  
  // addArticle = () =>{
  //   let obj = {name: this.state.stone, price: this.state.price};
  //   localStorage.setItem('stone', JSON.stringify(obj));
  // }

  getArticle() {
    let data = sessionStorage.getItem('stone');
    data = JSON.parse(data);
    console.log(data);
  }


  render(){
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Menu 
            cart={this.state.cart} 
            stone={this.state.stone}
            addArticle={this.addArticle}
            getArticle={this.getArticle}/>}
          />
          <Route exact path='/' element={<Store 
            stone={this.state.stone} 
            loading={this.state.loading} 
            cart={this.state.cart} 
            addArticle={this.addArticle} />}
          />
          <Route exact path='/' element={<Footer/>} />
        </Routes>
      </Router>
    )
  }
}
export default App;
