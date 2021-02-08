import React from "react";
import CounterContainer from "./CounterContaier";
import PostListContainer from "./PostListContainer";

function ReduxMiddleware(){
    return (
        <div className="sample">
            <h1>Redux 미들웨어(react-saga) 예제</h1>
            <CounterContainer />

            <hr />

            <PostListContainer />
        </div>
    )
}

export default ReduxMiddleware;