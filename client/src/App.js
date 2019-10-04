import React from 'react';
import './App.css';
import axios from 'axios';

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
    .then(res => {
      console.log("API RETURNS:", res.data);
      this.setState({ data: res.data });
    })
    .catch(err => console.log("OOPS ", err))
  }

 

  render() {
    return (
      <div>
        {this.state.data.map(person => {
          return (
          <h1>{person.name}</h1>
          )
        })} 
      </div>
    )
  }
} 

export default App;