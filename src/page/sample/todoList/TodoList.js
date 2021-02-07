import React from "react";
import TodoItem from './TodoItem';
import { useTodoState } from "./reducer/TodoContext";
import styled from 'styled-components';

const TodoListBlock = styled.div`
        flex: 1;
        padding: 20px 32px;
        padding-bottom: 48px;
        overflow-y: auto;
        background: #fff; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
    `;

function TodoList(){
    const todos = useTodoState();

    // Item 리스트 생성
    const todoItem = todos.map(( todo ) => {
        return <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
    })

    return (
        <TodoListBlock>
            {todoItem}
        </TodoListBlock>
    )
}

export default TodoList;