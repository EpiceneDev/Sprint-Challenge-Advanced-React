import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import PlayerCard from './PlayerCard.js';

export const PlayerList = (initialValue) => {
    const [players, setPlayers] = useLocalStorage('players', initialValue)

    
    
        return( 
            <PlayerCard />
        )
    
}