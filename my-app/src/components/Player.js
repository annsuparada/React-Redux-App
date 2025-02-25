import React from 'react';

const Player = props => {
    console.log('props', props)
    return (
        <div className="player">
            <h2>{props.player.first_name} {props.player.last_name}</h2>
            <h3>Postion: {props.player.position}</h3>
            <h3>Team: {props.player.team.full_name}</h3>
        </div>
    )
        
    
}

export default Player;