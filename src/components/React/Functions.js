import React from 'react';

class Functions extends React.Component {
  classFunc(){
    console.log('This is a class Function')
  }
  constructor(){
    super()
    this.state = {
      word: 'Function Default state.name'
    }
  }
  handleChange = (event) => {
    this.setState({word: event.target.value})
  };
  handleClick = (e) => {
    e.preventDefault();
    alert('You clicked me')
  };
  render(){
    return (
      <div className = 'functions'>
        {this.classFunc()}
        <h2>Functions</h2>
        <h3>EventHandling</h3>
        <p>You must call <span className = 'code'>preventDefault</span> explicitly to prevent default behavior in React.</p>
        <p>EX: prevent the default link behavior of opening a new page like the anchor tag below.</p>
        <a href = "#" onClick = {this.handleClick}>Click Me</a>

        <h3>Change the state of the same component</h3>
        <input onChange = {this.handleChange} placeholder ='Put some word here'/>
        <h4>{ this.state.word }</h4>
        <h3>Change the state of another component</h3>
        <input onChange = { this.props.funcFromApp} placeholder ='Put some word here'/>
      </div>
    )
  }
}

export default Functions;
