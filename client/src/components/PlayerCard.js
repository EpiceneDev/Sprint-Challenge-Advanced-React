import React from 'react';

const PlayerCard = (props) => {
    const info = [props.players];
    console.log("playercard info: ", info);

    return (
        <>
            {info.map((player, key) => {
                console.log("player ", player)
            
                
                return (
                    <div className="player-card" key={player.id}>
                        <h2>Hello, my name is {player.name}.</h2>
                        <h3>I play ball for {player.country}.</h3>
                        <p>I am ranked number {player.searches} in online searches.</p>
                    </div>
                )
            })}
        </>
    )   
}
            

export default PlayerCard;