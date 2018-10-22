import React from 'react';

class Functions extends React.Component {
  classFunc(){
    console.log('This is a class Function')
  }
  constructor(){
    super()
    this.state = {
      word: 'Default'
    }
  }
  handleChange = (event) => {
    this.setState({word: event.target.value})
  };
  render(){
    return (
      <div className = 'functions'>
        {this.classFunc()}
        <h2>Functions</h2>
        <h3>Change the state of the same component</h3>
        <input onChange = {this.handleChange} placeholder ='Put some word here'/>
        <h3>{ this.state.word }</h3>
        <h3>Change the state of another component</h3>
        <input onChange = { this.props.funcFromApp} placeholder ='Put some word here'/>
      </div>
    )
  }
}

export default Functions;
