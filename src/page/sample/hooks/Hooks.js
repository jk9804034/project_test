import React, { useReducer, useRef } from "react";
import User from "./User";
import List from "./List";

const initialState = {
    inputs: {
        username: '',
        email: ''
    },
    users: [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: false
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]
};

// Reducer 함수
function reducer(state, action){
    switch(action.type){
        case "INPUT_CHANGE" :
            return {
                ...state,
                inputs : {
                    ...state.inputs,
                    [action.name] : action.value
                }
            }
        case "CREATE_ADD" : 
            return {
                ...state,
                users : [
                    ...state.users,
                    action.obj
                ]
            }
        case "LIST_DEL" : 
            return {
                ...state,
                users : state.users.filter(user => action.id !== user.id)
            }
        case "LIST_TOGGLE" : 
            return {
                ...state,
                users : state.users.map(item =>
                    item.id === action.id ? { ...item, active : !item.active } : item
                )
            }
        default :
            return state;
    }
}

function Hooks(){
    // 리듀서 선언
    const [state, dispatch] = useReducer(reducer, initialState);

    // Input Value 값
    const { username, email } = state.inputs;
    // 증가할 리스트 ID값
    const CreateId = useRef(state.users.length);

    // Input 내용 변경
    const onChange = (e) => {
        const { name, value } = e.target;

        // Input Dispatch
        dispatch({
            type : "INPUT_CHANGE",
            name,
            value
        })
    }

    // 리스트 추가
    const onCreate = () => {
        // ID값 증가
        CreateId.current += 1;

        // 추가할 객체
        const obj = {
            id: CreateId.current,
            username: username,
            email: email,
            active: false
        }

        // 생성 Dispatch
        dispatch({
            type : "CREATE_ADD",
            obj
        });
    }

    // 리스트 삭제
    const onDelete = (id) => {
        dispatch({
            type : "LIST_DEL",
            id
        });
    }

    // 리스트 토글
    const onToggle = (id) => {
        dispatch({
            type : "LIST_TOGGLE",
            id
        })
    }
    
    return (
        <div className="sample">
            <h1>Hooks(useReducer) 예제</h1>
            
            <User
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />

            <List
                users={state.users}
                onDelete={onDelete}
                onToggle={onToggle}
            />
        </div>
    )
}

export default Hooks;