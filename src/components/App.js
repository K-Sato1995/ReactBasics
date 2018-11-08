import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../style/style.css';
import Navbar from './Navbar';
import StateProps from './StateProps';
import Functions from './Functions';
import Page1 from './Routing/Page1';
import Page2 from './Routing/Page2';
import Ajax from './Ajax';
import LifeCycle from './LifeCycle';
import Refs from './Refs';

class App extends Component {
  constructor(){
    super()
    this.state = {
      name: 'App Default state.name'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  render() {
    const codesnippet1 = (
      `
      <div className = 'style'>
        <h1 className = 'title-ex'>Title</h1>
      </div>
      `
    )
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <div className = 'container'>
              <h2 id = "#Style">Style</h2>
              <p>Class should be called <strong>ClassName</strong> in React</p>
              <pre>
                <div className = 'highlight'>
                  { codesnippet1 }
                </div>
              </pre>
              <StateProps hello = {'Hello from App'}/>
              <Functions funcFromApp = {this.handleChange}/>
              <h3>{this.state.name}</h3>
              <h2>Routing</h2>
              <ul>
                <li><Link to = "/Page1">Page1</Link></li>
                <li><Link to = "/Page2">Page2</Link></li>
              </ul>
              <Route exact path='/Page1' render ={ () => <Page1 item = {"Item from App"}/>}/>
              <Route path='/Page2' component={Page2}/>
              <Ajax />
              <LifeCycle />
              <Refs />
            </div>
            <footer></footer>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
