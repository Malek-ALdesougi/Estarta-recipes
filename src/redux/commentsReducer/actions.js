import * as COMMENTS_CONSTANTS from './constants'


export const addComment = (dish,comment) => (dispatch) => {
    // console.log(dish.name, comment);
    dispatch({type: COMMENTS_CONSTANTS.ADD_COMMENT, payload: {dish,comment}})
}