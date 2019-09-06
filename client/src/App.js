import React from 'react';
import { PlayerList } from './components/PlayerList.js';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: {},
      location: "",
      rank: ""
    };
  }

  componentDidMount() {
    axios.get("https://googletrends.github.io/data/")
        .then(res => {
            console.log('api res: ', res)
        })
        .catch(err => {
            console.log('api error: ', err)
        })
}

  render() {
    return (
      <div className="App">
        <PlayerList />
      </div>
    );
  }
}

export default App;
