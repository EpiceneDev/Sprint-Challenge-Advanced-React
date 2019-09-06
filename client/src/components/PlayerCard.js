import React from 'react';

const PlayerCard = (props) => {
    const info = [props.players];
    info.map(player => {return player})
    // const { name, country, searches } = props.players;
    console.log("playercard info: ", info);

    return (
        <>
            {info.forEach(status => {
                console.log(status)
                return(
                    <div className="player-card" key={status.id}>
                        <h2>Hello, my name is {status.name}.</h2>
                        <h3>I play ball for {status.country}.</h3>
                        <p>I am ranked number {status.searches} in online searches.</p>
                    </div>
                )
            })}
        </>
    )   
}
            

export default PlayerCard;