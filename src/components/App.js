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
import SimpleCondition from './SimpleCondition';
import Maps from './Maps';

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
    console.log('Rendered')
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
              <h4>Name: {this.state.name}</h4>
              <p>React calls <span className = 'code'>render()</span> method every time the state has changed. </p>
              <p>In this case, <span className = 'code'>Name</span> is a state of the App component and it(Name) gets changed with <span className = 'code'>setState</span> every time you type something in the input bar.</p>
              <p>That means, React calls <span className = 'code'>render()</span> method every time you type something in the input bar!!</p>
              <p>Note: Since <span className = 'code'>Name</span> is a state of the App component, React only calls the <span className = 'code'>render()</span> method of App!!</p>
              <h2>Routing</h2>
              <ul>
                <li><Link to = "/Page1">Page1</Link></li>
                <li><Link to = "/Page2">Page2</Link></li>
              </ul>
              <p>You can check <a href = 'https://k-blog0130.herokuapp.com/posts/58'>this post</a> for details.</p>
              <Route exact path='/Page1' render ={ () => <Page1 item = {"Item from App"}/>}/>
              <Route path='/Page2' component={Page2}/>
              <Ajax />
              <LifeCycle />
              <Refs />
              <SimpleCondition />
              <Maps />
            </div>
            <footer></footer>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
