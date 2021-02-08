// 액션 타입
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// 액션 생성 함수
let nextId = 1; // todo 데이터에서 사용 할 고유 id
export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
        text
    }
});
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

// 초기 상태값
const initialState = [
    /*
    {
        id: 1,
        text: '예시',
        done: false
    } 
    */
];

// Reducer
export default function todos(state = initialState, action){
    switch(action.type){
        case ADD_TODO :
            return {
                ...state,
                todo : action.todo
            };
        case TOGGLE_TODO :
            return state.map(( todo ) => {
                return todo.id === action.id ? { ...state, done : !todo.done } : todo;
            });
        default :
            return state;
    }
}