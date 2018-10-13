import React, { Component } from 'react';
import '../style/style.css';
import Navbar from './Navbar';
import About from './About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Simple Routing</h1>
        <About />
      </div>
    );
  }
}

export default App;
