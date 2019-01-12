import React from 'react';

class Home extends React.Component {
  render() {
    const test = {
      marginTop: '100px'
    }
    return (
      <div>
        <h1 style={test}>Home</h1>
      </div>
    )
  }
}

export default Home;
