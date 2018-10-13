import React from 'react';
import '../../style/style.css';

class Page1 extends React.Component{
  render(){
    return (
      <div className = 'page1'>
        <h2>This is Page1</h2>
        <p>This is all about beer</p>
        <p>{ this.props.item }</p>
      </div>
    )
  }
}

export default Page1;
