import React from 'react';
import { PlayerList } from './components/PlayerList.js';
import DarkModeBar from './components/DarkModeBar';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: {},
      country: "",
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
        .then(res => {
          console.log('api data: ', res.data)
          res.data.map(player => {
            this.setState(this.player);
            console.log(this.player)
          })
        })
        .catch(err => {
            console.log('api error: ', err)
        });
    // axios
    //   .get('https://googletrends.github.io/data/')
    //   .then(res => {
    //       console.log('second api returned: ', res ); 
    //   })
    //   .catch(err => console.log("second api req error!", err));
}

// componentDidUpdate() { 
//   console.log("CDU: ", this.state)
// }

  render() {
    return (
      <div className="App">
        <DarkModeBar />
        <PlayerList />
      </div>
    );
  }
}

export default App;
