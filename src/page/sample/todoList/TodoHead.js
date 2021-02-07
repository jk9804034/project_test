import React from "react";
import { useTodoState } from "./reducer/TodoContext";
import styled from "styled-components";

function TodoHead(){
    const TodoHeadBlock = styled.div`
        padding-top: 48px;
        padding-left: 32px;
        padding-right: 32px;
        padding-bottom: 24px;
        border-bottom: 1px solid #e9ecef;
        h1 {
            margin: 0;
            font-size: 36px;
            color: #343a40;
            border: none;
        }
        .day {
            margin-top: 4px;
            color: #868e96;
            font-size: 21px;
        }
        .tasks-left {
            color: #20c997;
            font-size: 18px;
            margin-top: 40px;
            font-weight: bold;
        }
    `;

    // 현재 날짜
    const date = new Date();
    const week = [
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일",
        "일요일"
    ];
    const weekYear = date.getFullYear()
    , weekMonth = date.getMonth()+1
    , weekDay = date.getDay()
    , weekDate = date.getDate()-1;

    // Content 데이터 
    const todos = useTodoState();
    // 할일남은 갯수
    const todoActive = todos.filter(todo => !todo.done);

    return (
        <TodoHeadBlock>
            <h1>{weekYear}년 {weekMonth}월 {weekDay}일</h1>
            <div className="day">{week[weekDate]}</div>
            <div className="tasks-left">할 일 {todoActive.length}개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;