import React, { useState, useRef } from "react";

function InputSample(){
    // Input 값
    const [value, setValue] = useState("");
    const firstInput = useRef();

    // Input Change 이벤트
    const evtInputValue = (e) => {
        setValue(e.target.value);
    }

    // Input KeyDown 이벤트
    const evtInputEnter = (e) => {
        if( e.key === "Enter" ){
            setValue("");

            firstInput.current.focus();
        }        
    }

    // 초기화 버튼 클릭
    const evtValueReset = () => {
        setValue("");

        firstInput.current.focus();
    }

    const [result, setResult] = useState({
        name : "",
        nickname : ""
    });
    const lastInput = useRef();

    const { name , nickname } = result;

    // Input Change 이벤트
    const evtInputValues = (e) => {
        const { value, name } = e.target;

        setResult({
            ...result,
            [name] : value
        });
    }

    // 초기화 버튼 클릭
    const evtValueResets = () => {
        setResult({
            name : "",
            nickname : ""
        });

        lastInput.current.focus();
    }

    return (
        <div className="sample">
            <h1>인풋값 테스트</h1>
            <input type="text" className="input_text" ref={firstInput} value={value} onChange={evtInputValue} onKeyDown={evtInputEnter} />
            <button type="button" className="input_button" onClick={evtValueReset}>초기화</button>
            <div className="input_result">
                <b>값: {value}</b>
            </div>

            <input type="text" className="input_text input_first" ref={lastInput} name="name" value={name} onChange={evtInputValues} />
            <input type="text" className="input_text input_last" name="nickname" value={nickname} onChange={evtInputValues} />
            <button type="button" className="input_button" onClick={evtValueResets}>초기화</button>
            <div className="input_result">
                <b>값: {name} ({nickname})</b>
            </div>
        </div>
    )
}

export default InputSample;