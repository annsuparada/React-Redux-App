import {
    FETCH_PLAYER_DATA_START,
    FETCH_PLAYER_DATA_SUCCESS,
    FETCH_PLAYER_DATA_FAILURE
} from '../actions'


const initialState = {
    players : [],
    isLoading: false,
    error: '',
}

export const reducer = (state = initialState, action) => {
switch (action.type) {
    case FETCH_PLAYER_DATA_START:
        return {
            ...state,
            isLoading: true,
            error: ''
        }
        case FETCH_PLAYER_DATA_SUCCESS:
            return {
                ...state,
                players: action.payload,
                isLoading: false,
                error: ''
            }
        case FETCH_PLAYER_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                // players: null,
                error: 'The API is down. Please try again later'
            }
    default: 
        return state;
}
}