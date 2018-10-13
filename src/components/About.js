import React from 'react';

class About extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'K-Sato'
    }
  }
  render(){
    return(
      <div className = 'about'>
        { this.state.name }
      </div>
    )
  }
}

export default About;
