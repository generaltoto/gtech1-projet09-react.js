import './App.css';
import {React, Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

import Home from './Home';
import Store from './Store';


class App extends Component {
  render(){
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/store' element={<Store />} />
        </Routes>
      </Router>
  )
  }
}
export default App;