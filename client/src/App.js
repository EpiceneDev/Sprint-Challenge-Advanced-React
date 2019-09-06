import React from 'react';
import PlayerCard from './components/PlayerCard.js';
import DarkModeBar from './components/DarkModeBar';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: {}
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
        .then(res => {
          this.setState({ players: res.data })
          })
        .catch(err => {
            console.log('api error: ', err)
        });
  }

  componentDidUpdate() {
    console.log("CDU", this.state)
  }  

  render() {
    // console.log('render', this.state.players)
    return (
      <div className="App">
        <DarkModeBar />
        <PlayerCard players={this.state.players} />
      </div>
    )
  }
}

export default App;
