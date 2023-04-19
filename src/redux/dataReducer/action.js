import * as DATA_CONSTANTS from './constants'

export const fetchData = () => (dispatch) => {

    dispatch({ type: DATA_CONSTANTS.FETCH_START });

    try {
        fetch('data.json')
            .then(res => res.json())
            .then(data => dispatch({ type: DATA_CONSTANTS.FETCH_SUCCESS, payload: data }));
    } catch (error) {
        dispatch({ type: DATA_CONSTANTS.FETCH_ERROR, payload: error })
    }
}