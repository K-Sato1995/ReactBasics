import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render(){
    return(
      <nav className = 'navbar'>
        <h1>React Basics</h1>
        <ul>
          <li><Link to= '/'>Home</Link></li><span>/</span>
          <li><Link to= '/React'>React Basics</Link></li><span>/</span>
          <li><Link to= '/JS'>Javascript(ES2016) Basics</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
