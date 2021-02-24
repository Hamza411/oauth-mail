import axios from "axios";
import {
    SIGN_IN,
    SIGN_OUT,
    // SEND_MESSAGE,
    FETCH_MESSAGES,
    // FETCH_MESSAGE,
    // DELETE_MESSAGE
} from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

// export const sendmessage = (formValues) => async (dispatch, getState) => {
//     const { userId } = getState().auth;
//     const response = await mails.post("/messages", { ...formValues, userId });
//     dispatch({ type: SEND_MESSAGE, payload: response.data })
// };

export const fetchMessages = (userId) => async dispatch => {
    const response = await axios.get(`https://gmail.googleapis.com/gmail/v1/users/${userId}/messages`);

    dispatch({ type: FETCH_MESSAGES, payload: response.data })
}

// export const fetchMessage = (id) => async dispatch => {
//     const response = await mails.get(`/messages/${id}`);
//     dispatch({ type: FETCH_MESSAGE, payload: response.data })
// }

// export const deleteMessage = (id) => async dispatch => {
//     await mails.delete(`/messages/${id}`);
//     dispatch({ type: DELETE_MESSAGE, payload: id })
// }
