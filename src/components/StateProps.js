import React from 'react';

class StateProps extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'K-Sato',
      age: 23
    }
  }
  render(){
    return(
      <div className = 'about'>
        <h2>State and Props</h2>
        <h3>My name is</h3>
        { this.state.name }
        <h3>I am</h3>
        { this.state.age }
        <h3>You can get a value from parent components using props</h3>
        { this.props.hello }
      </div>
    )
  }
}

export default StateProps;
