import {
    // SEND_MESSAGE,
    FETCH_MESSAGES,
    // FETCH_MESSAGE,
    // DELETE_MESSAGE
} from "../actions/types";
import _ from "lodash";

const mailReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_MESSAGES:
            return { ...state, ..._.mapKeys(action.payload, "id") };
        // case FETCH_MESSAGE:
        //     return { ...state, [action.payload.id]: action.payload };
        // case SEND_MESSAGE:
        //     return { ...state, [action.payload.id]: action.payload };
        // case DELETE_MESSAGE:
        //     return _.omit(state, action.payload)
        default:
            return state
    }
}

export default mailReducer;