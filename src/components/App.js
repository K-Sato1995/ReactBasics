import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../style/style.css';
import Navbar from './Navbar';
import ReactHome from './React/ReactHome'
import Home from './Home';
import JsHome from './Js/JsHome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route exact path = '/' component={Home} />
            <Route exact path = '/React' component={ReactHome} />
            <Route exact path = '/JS' component={JsHome} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
