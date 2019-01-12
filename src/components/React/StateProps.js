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
    const snippet2 = (
      `
      constructor(props){
        super(props)
        this.state = {
          name: 'K-Sato',
          age: 23
        }
      }
      `
    )
    const snippet3 = (
      `
      { this.state.name } //=> K-Sato
      { this.state.age } //=> 23
      `
    )

    const snippet4 = (
      `
        // Components/App.js

        import StateProps from './StateProps';

        <StateProps hello = {'Hello from App'}/>
      `
    )
    return(
      <div className = 'about'>
        <h2>State and Props</h2>
        <p>You can define a state like the code below.</p>
        <pre>
          <div className = 'highlight'>
            { snippet2 }
          </div>
        </pre>
        <p>Then, you can access to the state like the code below</p>
        <pre>
          <div className = 'highlight'>
            { snippet3 }
          </div>
        </pre>
        <div className = 'example'>
          <h2>Example</h2>
          <h3>My name is</h3>
          { this.state.name }
          <h3>I am</h3>
          { this.state.age }
        </div>
        <h3>You can get values from parent components using props</h3>
        <p>You can pass a value from a parent component to a child component like the code below.</p>
        <p>In this case, I'm goona pass a value from the App component to the StateProps component.</p>
        <pre>
          <div className = 'highlight'>
            { snippet4 }
          </div>
        </pre>
        <div className = 'example'>
          <h2>Example</h2>
          <h3>{`App.js says "${ this.props.hello }"`}</h3>
        </div>
      </div>
    )
  }
}

export default StateProps;
