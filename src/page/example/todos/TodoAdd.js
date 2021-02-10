import React from "react";
import styled from "styled-components";

const TodoAddForm = styled.div`
    height:45px;
    padding:20px 18px;
    border-bottom:1px solid #ccc;
`;
const TodoAddInput = styled.input`
    width:303px;
    height:100%;
    margin-right:7px;
    font-size:14px;
    color:#333;
    vertical-align:center;
    border:1px solid #ccc;
    box-sizing:border-box;
    :focus {
        outline:none;
    }
`;
const TodoAddButton = styled.button`
    height:44px;
    padding:0 10px;
    font-size:16px;
    vertical-align:center;
    border:1px solid #ccc;
    background:#eee;
`;

function TodoAdd({
    psValue,
    psInputRef,
    evtInputChange,
    evtAddClick
}){
    return (
        <>
            <TodoAddForm>
                <TodoAddInput
                    type="text"
                    placeholder="할 일을 입력해주세요."
                    value={psValue}
                    onChange={evtInputChange}
                    ref={psInputRef}
                />
                <TodoAddButton type="button" onClick={evtAddClick}>추가</TodoAddButton>
            </TodoAddForm>
        </>
    )
}

export default React.memo(TodoAdd);