import * as COMMENTS_CONSTANTS from './constants'


const initState = {
    comments: [],
    loading: false
}


const commentsReducer = (state = initState, action) => {
    switch (action.type) {
        case COMMENTS_CONSTANTS.ADD_COMMENT: 
        return {comments: state.comments.concat({dishName: action.payload.dish.name, comment: action.payload.comment})}
        default:
            return state;
    }
}

export default commentsReducer ;