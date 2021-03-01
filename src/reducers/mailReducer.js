import {
    SEND_MESSAGE,
    FETCH_MESSAGES,
    FETCH_MESSAGE
} from "../actions/types";
// import _ from "lodash";

const mailReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_MESSAGES:
            return { ...state, mails: action.payload };
        case FETCH_MESSAGE:
            return { ...state, [action.payload.id]: action.payload };
        case SEND_MESSAGE:
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state
    }
}

export default mailReducer;