import React from 'react';

class Ajax extends React.Component{
  constructor(){
    super();
    this.state = {
      arry: [ {id: 0, title: 'Default'} ]
    }
  }
  //Fetch data from MyApi(https://github.com/K-Sato1995/MyApi)
  //Run rails s -p 8000 first
  getData = () => {
    fetch('https://k-blog0130.herokuapp.com/en/api/v1/posts')
    .then(response => response.json())
    .then(data => {
      console.log(data.data)
      this.setState({arry: data.data})
    })
  }
  render(){
    //How to use map and const in React
    const list = this.state.arry.map((item) =>
        <li key={item.id}>{item.title}</li>
    );
    return(
      <div>
        <h2>How to make an ajax request in React</h2>
        <p>Fetch data from <a href = 'https://k-blog0130.herokuapp.com/en/'>MyBlog's Api</a>. </p>
        <button onClick = { this.getData }>Get Data</button>
        { list }
      </div>
    )
  }
}

export default Ajax;
