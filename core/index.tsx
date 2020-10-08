
import { combineReducers } from "redux";
import LoginReducer from "./login/reducers/LoginReducers";
// Create the root reducer
const rootReducer = combineReducers({
    loginState: LoginReducer,
});

export default rootReducer;