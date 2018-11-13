import React from 'react';

class ConditionalRendering extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: ['Item1', 'Item2', 'Item3', 'Item4']
    }
  }
  render (){
    const list = this.state.todos.map((todo, index) => {
      <li>
        { todo }
      </li>
    })
    return (
      <div>
        <ul>
          { list }
        </ul>
      </div>
    )
  }
}

export default Maps;
