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
          console.log('people', res.data);
          this.setState({ players: res.data })
          console.log('players', this.state);
          })
        .catch(err => {
            console.log('api error: ', err)
        });
  }

    
  render() {
    return (
      <div className="App">
        <DarkModeBar />
        {/* {this.state.map(player => {
          return(
          <PlayerCard player={player} />
        )})} */}
      </div>
    )
  }
}

export default App;
