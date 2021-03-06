import React, { useReducer, createContext, useContext, useRef } from "react";

// 초기 데이터
const initialTodos = [
    {
        id: 1,
        text: '프로젝트 생성하기',
        done: true
    },
    {
        id: 2,
        text: '컴포넌트 스타일링하기',
        done: true
    },
    {
        id: 3,
        text: 'Context 만들기',
        done: false
    },
    {
        id: 4,
        text: '기능 구현하기',
        done: false
    }
];

// Reducer
function todoReducer(state, action){
    switch(action.type){
        case "CREATE" :
            return [ ...state, action.todo ];
        case "TOGGLE" : 
            return state.map(( todo ) => {
                return todo.id === action.id ? { ...todo, done : !todo.done } : todo
            });
        case "REMOVE" : 
            return state.filter(user => user.id !== action.id);
        default :
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

// Context 생성
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

// Context Provider
export function TodoProvider({ children }){
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

// Use state
export function useTodoState(){
    const context = useContext(TodoStateContext);

    if( !context ){
        throw new Error('Cannot find TodoProvider');
    }

    return context;
}

// Use dispatch
export function useTodoDispatch(){
    const context = useContext(TodoDispatchContext);

    if( !context ){
        throw new Error('Cannot find TodoProvider');
    }

    return context;
}

// Use nextId
export function useTodoNextId(){
    const context = useContext(TodoNextIdContext);

    if( !context ){
        throw new Error('Cannot find TodoProvider');
    }

    return context;
}