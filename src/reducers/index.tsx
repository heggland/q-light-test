import { combineReducers } from "redux";
import counter from "./counter"

export const rootReducer: any = combineReducers({
    counter
});

export default rootReducer;
