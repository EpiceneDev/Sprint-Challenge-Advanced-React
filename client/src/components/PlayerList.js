import React from 'react';
import PlayerCard from './PlayerCard.js';

class PlayerList extends React.Component {
    
    componentDidMount() {
        axios.get("https://googletrends.github.io/data/")
            .then(res => {
                console.log('api res: ', res)
            })
            .catch(err => {
                console.log('api error: ', err)
            })
    }

    render(
        return( 
            <PlayerCard />
        )
    )
}