import React from 'react';

class LifeCycle extends React.Component {
  constructor(){
    super()
    this.state = {
      value: 'Default Value'
    }
  }
  componentWillMount(){
    console.log('Comp Will Mount!!')
  }

  componentDidMount(){
    console.log('Comp Did Mount!!')
  }

  componentWillUpdate(){
    console.log('Comp Will Update!!')
  }

  componentDidUpdate(){
    console.log('Comp Did Update!!')
  }

  componentWillUnmount(){
    console.log('Comp Will Unmount')
  }
  render (){
    const updateComp = () => {
      console.log('Updating Comp')
      this.setState({ value: 'New Value' })
    }
    return(
      <div>
        <h2>Life Cycle</h2>
        <p><strong>Check the console!!!!!!!!!!!!!!!!</strong></p>
        <p><strong>Also here is a <a href = 'https://gist.github.com/bvaughn/923dffb2cd9504ee440791fade8db5f9'>cheatsheet</a></strong></p>
        { console.log('Comp Is Mounting')}
        <button onClick = { updateComp }>Component Update</button>
      </div>
  )
 }
}

export default LifeCycle;
