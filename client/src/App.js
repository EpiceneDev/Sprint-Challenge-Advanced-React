import React from 'react';
import './App.scss';
import axios from 'axios';
import Navbar from "./components/Navbar";
import {XYPlot, LineSeries} from 'react-vis';

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
      <div className="App">
        <Navbar />
        {/* <XYPlot height={300} width={300}>
          <LineSeries data={this.state.data} />
        </XYPlot> */}
        {this.state.data.map(person => {
          return (
            <div className="player">
              <h1>{person.name}</h1>
              <h2>{person.country}</h2>
              <h2>Search ranking: {person.searches}</h2>
              <hr/>
            </div>
          )
        })} 
      </div>
    )
  }
} 

export default App;