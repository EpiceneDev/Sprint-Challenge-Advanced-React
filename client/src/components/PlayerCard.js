import React from 'react';

const PlayerCard = (props) => {
    console.log("playercard props: ", props.players);
    const info = [props.players];
    return (
        <>
        {info.map(player => {
                return (
                    <div className="player-card" key={Date.now}>
                        <h2>Hello, my name is {player.name}.</h2>
                        <h3>I play ball for {player.country}.</h3>
                        <p>I am ranked number {player.searches} in online searches.</p>
                    </div>
                )
        })}
        <h1>hello</h1>
        </>
    )
}

export default PlayerCard;