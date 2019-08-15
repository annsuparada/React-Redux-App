import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions'

import Player from './Player'

const PlayerList = props => {
    return(
        <>
        <Player />
        <h1>{props.test}</h1>
        </>
    )
    
} 
const mapStateToProps = state => {
    return {
      test: state.test
    };
  };
export default connect(mapStateToProps,
    { getData }
    )(PlayerList)