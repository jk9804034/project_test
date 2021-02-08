import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import counter from "./counter";
import todos from "./todos";
import sagaCounter, { counterSaga } from "./sagaCounter";
import posts, { postsSaga } from "./posts";

const rootReducer = combineReducers({
    counter,
    todos,
    sagaCounter,
    posts
});

export function* rootSaga(){
    yield all([
        counterSaga(),
        postsSaga()
    ]);
}

export default rootReducer;