import { combineReducers } from "redux";
import counter from "./counter"

export const rootReducer = combineReducers({
    counter
});

export default rootReducer;
