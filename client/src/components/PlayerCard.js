import React from 'react';
import Player from './Player.js';

const PlayerCard = (props) => {
    const info = [props.players];
    // info.map(player => {return player})
    // const { name, country, searches } = props.players;
    // console.log("playercard info: ", info);

    return (
        <>
            {info.map(player => {
                return (Array.from(player).forEach(element => {
                    // console.log('element', element)
                    return <Player person={element}/>
                }))
            })}
        </>
    )   
}
            

export default PlayerCard;