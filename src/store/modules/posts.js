import { call, put, takeEvery } from 'redux-saga/effects';
import * as postsAPI from '../api/api'; // api/posts 안의 함수 모두 불러오기

/* 액션 타입 */
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPosts = () => ({ type: GET_POSTS });
export const getPost = id => ({ type: GET_POST, payload: id, meta: id });

function* getPostsSaga(){
    try {
        const posts = yield call(postsAPI.getPosts);
        yield put({
            type : GET_POSTS_SUCCESS,
            payload : posts
        })
    } catch(e){
        yield put({
            type : GET_POSTS_ERROR,
            error : true,
            payload : e
        })
    }
}

function* getPostSaga(action){
    const param = action.payload;
    const id = action.meta;

    try {
        const post = yield call(postsAPI.getPostById, param);
        yield put({
            type : GET_POST_SUCCESS,
            payload : post
        })
    } catch(e){
        yield put({
            type : GET_POST_ERROR,
            error : true,
            payload : e
        })
    }
}

export function* postsSaga(){
    yield takeEvery(GET_POSTS, getPostsSaga);
    yield takeEvery(GET_POST, getPostSaga);
}

const initialState = {
    posts: {
        loading: false,
        data: null,
        error: null
    },
    post: {
        loading: false,
        data: null,
        error: null
    }
};

export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            };
        case GET_POSTS_ERROR:
            return {
                ...state,
                posts: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            };
        case GET_POST:
            return {
                ...state,
                post: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_POST_SUCCESS:
            return {
                ...state,
                post: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            };
        case GET_POST_ERROR:
            return {
                ...state,
                post: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            };
        default:
            return state;
    }
}