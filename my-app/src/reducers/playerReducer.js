import {
    FETCH_PLAYER_DATA_START,
    FETCH_PLAYER_DATA_SUCCESS,
    FETCH_PLAYER_DATA_FAILURE
} from '../actions'


const initialState = {
    players : [],
    isLoading: false,
    error: '',
    test: 'This is a test'
}

export const reducer = (state = initialState, action) => {
switch (action.type) {
    case FETCH_PLAYER_DATA_START:
        return {
            ...state,
            isLoading: true,
            error: ''
        }
    default: 
        return state;
}
}