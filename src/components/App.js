import React, { Component } from 'react';
import '../style/style.css';
import Navbar from './Navbar';
import StateProps from './StateProps';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
          <h3>ClassName</h3>
           <p>Class should be called ClassName in React</p>
        <StateProps hello = {'Hello from App'}/>
      </div>
    );
  }
}

export default App;
