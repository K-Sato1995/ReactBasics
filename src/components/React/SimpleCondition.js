import React from 'react';

class SimpleCondition extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true
    }
  }
  handleChange = () => {
    this.setState( {isToggleOn: !this.state.isToggleOn})
  }
  render() {
    return (
      <div>
        <h2>Simple Condition</h2>
        <p>You can define a simple condition like the code below.</p>
        <div className = 'highlight'>this.state.isToggleOn ? 'ON' : 'OFF'</div>
        <p>Also you can easily toggle two values like the code below</p>
        <div className = 'highlight'>isToggleOn: !this.state.isToggleOn</div>
        <div className = 'example'>
          <h2>Example</h2>
          <p>On-Off Switch</p>
          <button onClick = {this.handleChange}>
            { this.state.isToggleOn ? 'ON' : 'OFF' }
          </button>
        </div>
      </div>
    )
  }
}

export default SimpleCondition;
