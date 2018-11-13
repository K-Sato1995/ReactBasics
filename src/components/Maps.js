import React from 'react';

class Maps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: ['Item1', 'Item2', 'Item3', 'Item4']
    }
  }
  render (){
    const list = this.state.todos.map((todo, index) =>
      <li key = {index}>
       { todo }
      </li>
    )

    const codesnippet = (
      `
      this.state = {
        todos: ['Item1', 'Item2', 'Item3', 'Item4']
      }

      const list = this.state.todos.map((todo, index) =>
        <li key = {index}>
         { todo }
        </li>
      )
      `
    )
    return (
      <div>
        <h2>Lists and Keys</h2>
        <p>Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.</p>
        <p>When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort.</p>
        <p>You can iterate an array of object using <span className = 'code'>map</span> like the code below.</p>
        <pre>
         <div className = 'highlight'>
            { codesnippet }
          </div>
        </pre>
        <div className = 'example'>
          <h2>Example</h2>
          <ul>
            { list }
          </ul>
        </div>
      </div>
    )
  }
}

export default Maps;
