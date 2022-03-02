import './App.css';

class App extends Component {
  render() {
    const Root = () => {
      return (
        <Router>
          <Routes>
            <Route exact path='/' component={App} />
            <Route exact path='/page2' component={Page2} />
          </Routes>
        </Router>
      )
    }
  }
}

export default App;
