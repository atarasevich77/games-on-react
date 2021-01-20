import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import users from "./reduser";
import { createStore, applyMiddleware } from "redux";

const store = createStore(
    users,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default store;