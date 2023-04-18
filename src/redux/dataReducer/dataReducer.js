//constant 
import * as DATA_CONSTANTS from './constants'

const initialState = {
    data: [],
    loading: false,
    error: null
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_CONSTANTS.FETCH_START:
            return { ...state, loading: true }
        case DATA_CONSTANTS.FETCH_SUCCESS:
            return { ...state, data: action.payload, loading: false }
        case DATA_CONSTANTS.FETCH_ERROR:
            return { ...state, error: action.payload }
        default:
            return state;
    }
}

export default dataReducer;