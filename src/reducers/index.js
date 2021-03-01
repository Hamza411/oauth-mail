import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import { reducer as formReducer } from "redux-form";
import mailReducer from "./mailReducer";

export default combineReducers({
    auth: AuthReducer,
    form: formReducer,
    mails: mailReducer
});