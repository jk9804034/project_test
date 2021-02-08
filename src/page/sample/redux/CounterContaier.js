import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Counter from "./Counter";
import {
    setDiff,
    increase,
    decrease
} from "../../../store/modules/counter";

function CounterContaier(){
    const dispatch = useDispatch();
    const {
        number,
        diff
    } = useSelector(state => state.counter, shallowEqual);

    // 증가
    const onIncrease = () => {
        dispatch( increase() );
    }
    // 감소
    const onDecrease = () => {
        dispatch( decrease() );
    }
    // 증가 및 감소 값
    const onChange = (e) => {
        const value = Number(e.target.value);

        dispatch( setDiff(value) );
    }

    return (
        <Counter
            psNumber={number}
            psDiff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onChange={onChange}
        />
    )
}

export default CounterContaier;