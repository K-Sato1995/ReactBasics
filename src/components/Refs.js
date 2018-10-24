import React from 'react';

class Refs extends React.Component {
  constructor(){
    super()
    //Create the ref
    this.exRef = React.createRef()
    this.test = React.createRef()
    this.state = {
      value: 'Default'
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ value: this.exRef.current.value })
  }

  handleClick = () => {
    console.log(this.refs.button)
  }

  handleChange = () => {
    this.test.current.style.color = 'red';
    console.log(this.test)
  }
  render(){
    return(
      <div>
        <h2>Refs(React.createRef())</h2>
        <p>Refs make it possible to access DOM nodes directly within React.</p>
        <h3>Value: {this.state.value}</h3>
        <form onSubmit = {this.handleSubmit}>
          {/* Call the ref with the ref attribute */}
          <input ref = { this.exRef }/>
          <button>Submit</button>
        </form>
        <h2>Refs(The ref attribute as a string)</h2>
        <p>This is the old way of creating a ref and it will likely be removed in a future release</p>
        <button ref = 'button' onClick = { this.handleClick }>Click and check the console</button>
        <h2>Test of my own</h2>
        <p>Try to access a dom using createRef</p>
        <p><strong>I could successfully access to a Dom ele by this approach. Therefore Use this approach from now on!!!</strong></p>
        <p><strong>Don't forget to add 'current' tho. Check the console or the source code. You will see what I mean.</strong></p>
        <h3 ref = { this.test }>TEXT</h3>
        <button onClick = { this.handleChange }>Change the color</button>
      </div>
    )
  }
}


export default Refs;
