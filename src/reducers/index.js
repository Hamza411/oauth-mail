import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer"
import mailReducer from "./mailReducer";

export default combineReducers({
    auth: AuthReducer,
    mails: mailReducer
});