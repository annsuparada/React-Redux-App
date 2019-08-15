import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions'
import Loader from 'react-loader-spinner'


import Player from './Player'

const PlayerList = props => {
    console.log(props)
    return(
        <>
        
        <button onClick={props.getData}>
            {props.isLoading ? (
                <Loader
                    type="TailSpin"
                    color="#00BFFF"
                    height="100"
                    width="100"
            /> ):(
            'See Players'
            )}
            
        </button>
        {props.error && <p className="error">{props.error}</p>}
        {props.players && props.players.map(item => 
            <Player key={item.first_name} player={item}/>
        )}
        </>
    )
    
} 
const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      players: state.players,
      error: state.error
    };
  };
export default connect(mapStateToProps,
    { getData }
    )(PlayerList)