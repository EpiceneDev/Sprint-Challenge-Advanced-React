import React from 'react';

const Player = (props) => {
    console.log("Player props: ", props.person)
    const {name, country, searches} = props.person
    return (
        <div className="player-card" key={Date.now}>
            <h2>Hello, my name is {name}.</h2>
            <h3>I play ball for {country}.</h3>
            <p>I am ranked number {searches} in online searches.</p>
        </div>
    )
};

export default Player;