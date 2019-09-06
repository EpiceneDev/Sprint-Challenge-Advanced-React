import React from 'react';

const PlayerCard = (props) => {
    const info = [props.players];
    console.log("playercard props: ", info);

        

    return (
        <>
            {info.map(player => {
                return (Array.from(player).forEach(element => {
                    // console.log('element', element)
                    return (
                        <div className="player-card" key={element.id}>
                            <h2>Hello, my name is {element.name}.</h2>
                            <h3>I play ball for {element.country}.</h3>
                            <p>I am ranked number {element.searches} in online searches.</p>
                        </div>
                    )
                }))
            
            })}
        </>
    )   
}
            

export default PlayerCard;