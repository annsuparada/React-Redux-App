import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions'
import Loader from 'react-loader-spinner'

import Player from './Player'

const PlayerList = props => {
    return(
        <>
        <h1>{props.test}</h1>
        <button>
            {props.isLoading ? 
                <Loader
                    type="TailSpin"
                    color="#00BFFF"
                    height="100"
                    width="100"
            /> :
            'See Players'
            }
        </button>
        {props.players.map(item => 
            <Player key={item.name} player={item}/>
        )}
        </>
    )
    
} 
const mapStateToProps = state => {
    return {
      test: state.test,
      isLoading: state.isLoading,
      players: state.players,
    };
  };
export default connect(mapStateToProps,
    { getData }
    )(PlayerList)