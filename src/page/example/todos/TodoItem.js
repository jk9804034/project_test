import React from "react";
import styled, { css } from "styled-components";

const TodoItemList = styled.li`
    display:flex;
    align-items:center;
    position:relative;
    margin:10px 0;
    font-size:14px;
    color:#666;
    list-style:none;
    :before {
        content:"";
        width:4px;
        height:4px;
        margin-right:7px;
        border-radius:50%;
        background:#ccc;
    }
`;
const TodoItemListBtn = styled.button`
    flex:1;
    text-align:left;
    border:none;
    background:transparent;
    ${props => 
        props.active &&
        css`
            text-decoration: line-through;
        `}
`;
const TodoItemListDel = styled.button`
    padding:5px;
    font-size:12px;
    color:#666;
    border:none;
    background:#eee;
`;

function TodoItem({
    psTitle,
    psActive,
    evtToggleClick,
    evtRemoveClick
}){
    return (
        <>
            <TodoItemList>
                <TodoItemListBtn type="button" active={psActive} onClick={evtToggleClick}>
                    {psTitle}
                </TodoItemListBtn>
                <TodoItemListDel type="button" onClick={evtRemoveClick}>
                    삭제
                </TodoItemListDel>
            </TodoItemList>
        </>
    )
}

export default React.memo(TodoItem);