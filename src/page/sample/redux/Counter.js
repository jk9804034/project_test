import React from "react";

function Counter({
    psNumber,
    psDiff,
    onIncrease,
    onDecrease,
    onChange
}){
    console.log("서브");
    return (
        <>
            <p className="counter_value">{psNumber}</p>
            <input type="number" value={psDiff} onChange={onChange} />
            <button type="button" className="counter_button" onClick={onDecrease}>감소</button>
            <button type="button" className="counter_button" onClick={onIncrease}>증가</button>
        </>
    )
}

export default React.memo(Counter);