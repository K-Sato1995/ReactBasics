import React from 'react';
import StateProps from './StateProps';
import Functions from './Functions';
import Ajax from './Ajax';
import LifeCycle from './LifeCycle';
import Refs from './Refs';
import SimpleCondition from './SimpleCondition';
import Maps from './Maps';

class ReactHome extends React.Component {
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
      <div>
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
          <Ajax />
          <LifeCycle />
          <Refs />
          <SimpleCondition />
          <Maps />
        </div>
        <footer></footer>
      </div>
    )
  }
}

export default ReactHome;
