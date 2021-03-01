import axios from "axios";
import {
    SIGN_IN,
    SIGN_OUT,
    SEND_MESSAGE,
    FETCH_MESSAGES,
    FETCH_MESSAGE,
} from './types';

export const signIn = (userId, email) => {
    return {
        type: SIGN_IN,
        payload: {
            userId: userId,
            email: email
        }
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const fetchMessages = (messages) => async (dispatch, getState) => {

    // const { email, userId } = getState().auth;
    // console.log(getState().auth)
    // console.log("email", email)
    // console.log("userId", userId)
    const token = localStorage.getItem("token")
    const email = localStorage.getItem("email")
    const url = `https://gmail.googleapis.com/gmail/v1/users/${email}/threads`

    // console.log("token*****************************", token)

    const response = await axios.get(url, {
        params: {
            maxResults: 20
        },
        headers: {
            "Authorization": "Bearer " + token
        }
    });

    dispatch({ type: FETCH_MESSAGES, payload: response.data })
}

export const sendmessage = (formValues) => async (dispatch, getState) => {
    const token = localStorage.getItem("token")
    const email = localStorage.getItem("email")
    const url = `https://gmail.googleapis.com/gmail/v1/users/${email}/messages/send`
    // const response = await mails.post("/messages", { ...formValues, userId });\
    console.log(formValues)
    const response = await axios.post(url, formValues, {
        headers: {
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            raw: formValues
        })
    })

    dispatch({ type: SEND_MESSAGE, payload: response.data })
};

export const fetchMessage = (id) => async dispatch => {

    const token = localStorage.getItem("token")
    const email = localStorage.getItem("email")

    const url = `https://gmail.googleapis.com/gmail/v1/users/${email}/messages/${id}`
    const response = await axios.get(url, {
        headers: {
            "Authorization": "Bearer " + token
        }
    });
    dispatch({ type: FETCH_MESSAGE, payload: response.data })
}