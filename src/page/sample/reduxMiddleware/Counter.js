import React from "react";

function Counter({
    psNumber,
    onIncrease,
    onDecrease,
    onChange
}){
    console.log("서브");
    return (
        <>
            <p className="counter_value">{psNumber}</p>
            <button type="button" className="counter_button" onClick={onDecrease}>감소</button>
            <button type="button" className="counter_button" onClick={onIncrease}>증가</button>
        </>
    )
}

export default React.memo(Counter);