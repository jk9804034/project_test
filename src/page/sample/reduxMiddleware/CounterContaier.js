import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Counter from "./Counter";
import {
    sagaIncreaseAsync,
    sagaDecreaseAsync
} from "../../../store/modules/sagaCounter";

function CounterContaier(){
    const dispatch = useDispatch();
    const number = useSelector(state => state.sagaCounter, shallowEqual);

    // 증가
    const onIncrease = () => {
        dispatch( sagaIncreaseAsync() );
    }
    // 감소
    const onDecrease = () => {
        dispatch( sagaDecreaseAsync() );
    }

    return (
        <Counter
            psNumber={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    )
}

export default CounterContaier;