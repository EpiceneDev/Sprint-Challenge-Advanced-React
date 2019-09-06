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
          console.log('api data: ', res.data)
          // this.setState()
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
        <PlayerList />
      </div>
    );
  }
}

export default App;
