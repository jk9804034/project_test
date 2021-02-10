import { call, put, takeEvery } from 'redux-saga/effects';
import * as postsAPI from '../api/api'; // api/posts 안의 함수 모두 불러오기

// 액션 타입
const TODO_DATA_LOAD = "todo/TODO_DATA_LOAD";
const TODO_DATA_SUCCESS = "todo/TODO_DATA_SUCCESS";
const TODO_DATA_ERROR = "todo/TODO_DATA_ERROR";
const TODO_INPUT_VALUE = "todo/TODO_INPUT_VALUE";
const TODO_VALUE_ADD = "todo/TODO_VALUE_ADD";
const TODO_DATA_TOGGLE = "todo/TODO_DATA_TOGGLE";
const TODO_DATA_REMOVE = "todo/TODO_DATA_REMOVE";

// 액션 생성 함수
export const todoDataLoad = () => ({ type : TODO_DATA_LOAD });
export const todoInputValue = value => ({ type : TODO_INPUT_VALUE, value });
export const todoValueAdd = obj => ({ type : TODO_VALUE_ADD, obj });
export const todoDataToggle = id => ({ type : TODO_DATA_TOGGLE, id });
export const todoDataRemove = id => ({ type : TODO_DATA_REMOVE, id });

function* getPostSaga(){
    try {
        const response = yield call(postsAPI.getPosts);

        yield put({
            type : TODO_DATA_SUCCESS,
            payload : response
        });
    } catch(e){
        yield put({
            type : TODO_DATA_ERROR,
            error : true,
            payload : e
        });
    }
}

export function* todoPostSaga(){
    yield takeEvery(TODO_DATA_LOAD, getPostSaga);
}

// 초기 상태값
const initialState = {
    value : "",
    post : {
        loading : false,
        error : null
    },
    todo : null/*[{
        id : 1,
        content : "테스트중입니다.111",
        done : false
    }, {
        id : 2,
        content : "테스트중입니다.222",
        done : false
    }, {
        id : 3,
        content : "테스트중입니다.333",
        done : false
    }]*/
};

export default function todos(state = initialState, action){
    switch(action.type){
        case TODO_DATA_LOAD : 
            return {
                ...state,
                post : {
                    loading : true,
                    error : null
                }
            };
        case TODO_DATA_SUCCESS : 
            console.log(action.payload);
            return {
                ...state,
                post : {
                    loading : false,
                    error : null
                },
                todo : action.payload
            };
        case TODO_DATA_ERROR : 
            return {
                ...state,
                post : {
                    loading : false,
                    error : action.error
                }
            };
        case TODO_INPUT_VALUE :
            return {
                ...state,
                value : action.value
            };
        case TODO_VALUE_ADD :
            console.log(action.obj);
            return {
                ...state,
                todo : [
                    ...state.todo,
                    action.obj
                ]
            };
        case TODO_DATA_TOGGLE :
            return {
                ...state,
                todo : state.todo.map(item => {
                    return item.id === action.id ? { ...item, done : !item.done } : item
                })
            };
        case TODO_DATA_REMOVE :
            return {
                ...state,
                todo : state.todo.filter(item => item.id != action.id)
            }
        default :
            return state;
    }
}

