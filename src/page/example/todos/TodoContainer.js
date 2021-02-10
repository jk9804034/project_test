import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import Spinner from "../../../component/spinner/Spinner";
import Alert from "../../../component/alert/Alert";
import {
    todoDataLoad,
    todoInputValue,
    todoValueAdd,
    todoDataToggle,
    todoDataRemove
} from "../../../store/modules/todos";

const GlobalStyle = createGlobalStyle`
    body {
        background:#e9ecef;
    }
`;

const LayoutForm = styled.div`
    width:400px;
    min-height:600px;
    margin:50px auto 0;
    border-radius:20px;
    background:#fff;
`;

function TodoContainer(){
    // Dispatch 정의
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    // ID 변수
    const todoAddId = useRef(0);
    // Alert 데이터
    const [alertActive, setAlertActive] = useState({
        active : false,
        title : ""
    });
    // 상태값
    const {
        value,
        post,
        todo
    } = useSelector(( state ) => state.todos);
    // 초기 한번 실행
    useEffect(() => {
        dispatch( todoDataLoad() );
    }, []);

    if( todo ){
        todoAddId.current = todo.length+1;
    }

    // Input Value
    const evtInputChange = (e) => {
        dispatch( todoInputValue(e.target.value) );
    }

    // List Add
    const evtAddClick = useCallback(() => {
        if( !value ){
            setAlertActive({
                active : true,
                title : "할일을 입력해주세요."
            });

            return false;
        }

        // 추가할 객체
        const obj = {
            id : todoAddId.current,
            title : value,
            done : false
        };

        dispatch( todoValueAdd(obj) );
        dispatch( todoInputValue("") );

        // Input Focus
        inputRef.current.focus();
    }, [todo, value]);

    // List Toggle
    const evtToggleClick = (id) => {
        dispatch( todoDataToggle(id) );
    }

    // List Delete
    const evtRemoveClick = (id) => {
        dispatch( todoDataRemove(id) );
    }

    // Alert 닫기
    const onAlertClose = () => {
        setAlertActive({
            ...alertActive,
            active : false
        });
    };

    return (
        <>
            <GlobalStyle />

            <LayoutForm>
                <TodoAdd
                    psValue={value}
                    psInputRef={inputRef}
                    evtInputChange={evtInputChange}
                    evtAddClick={evtAddClick}
                />

                {
                    todo &&
                    <TodoList
                        psTodo={todo}
                        evtToggleClick={evtToggleClick}
                        evtRemoveClick={evtRemoveClick}
                    />
                }                
            </LayoutForm>
            
            {/* 로딩 Spinner */}
            <Spinner
                psLoading={post.loading}
            />

            {/* Alert */}
            <Alert
                alertActive={alertActive}
                onAlertClose={onAlertClose}
            />
        </>
    )
}

export default TodoContainer;