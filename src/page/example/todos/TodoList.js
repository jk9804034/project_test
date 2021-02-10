import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListUl = styled.ul`
    margin:30px 20px;
`;

function TodoList({
    psTodo,
    evtToggleClick,
    evtRemoveClick
}){
    // 목록 생성
    const list = psTodo.map(( item ) => {
        return (
            <TodoItem
                key={item.id}
                psTitle={item.title}
                psActive={item.done}
                evtToggleClick={() => evtToggleClick(item.id)}
                evtRemoveClick={() => evtRemoveClick(item.id)}
            />
        )
    })

    return (
        <>
            <TodoListUl>
                {list}
            </TodoListUl>
        </>
    )
}

export default TodoList;