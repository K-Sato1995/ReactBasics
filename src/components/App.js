import React, { Component } from 'react';
import '../style/style.css';
import Navbar from './Navbar';
import StateProps from './StateProps';
import Functions from './Functions';
import Page1 from './Routing/Page1';
import Page2 from './Routing/Page2';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  constructor(){
    super()
    this.state = {
      name: 'App Default'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
              <h3>Style</h3>
               <p>Class should be called ClassName in React</p>
            <StateProps hello = {'Hello from App'}/>
            <Functions funcFromApp = {this.handleChange}/>
            <h2>{this.state.name}</h2>
            <h2>Routing</h2>
            <ul>
             <li><Link to = "/Page1">Page1</Link></li>
             <li><Link to = "/Page2">Page2</Link></li>
            </ul>
            <Route exact path='/Page1' component={Page1}/>
            <Route path='/Page2' component={Page2}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
