import React, { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const onIncreas = () => {
        console.log("+1");
        setCount(prevCount => prevCount + 1);
    }
    
    const onDecrease = () => {
        console.log("-1");
        setCount(prevCount => prevCount - 1);
    }
    
    return (
        <div className="sample">
            <h1>카운트 예제</h1>
            <p className="counter_value">{count}</p>
            <button type="button" className="counter_button" onClick={onIncreas}>증가</button>
            <button type="button" className="counter_button" onClick={onDecrease}>감소</button>
        </div>
    )
}

export default Counter;