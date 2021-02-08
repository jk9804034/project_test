import { createContext, useReducer, useContext } from "react";
import {
    createAsyncDispatcher,
    createAsyncHandler,
    initialAsyncState
} from './AsyncActionUtils';
import * as api from './Api';

const initialState = {
    users: initialAsyncState,
    user: initialAsyncState
};

const usersHandler = createAsyncHandler('GET_USERS', 'users');
const userHandler = createAsyncHandler('GET_USER', 'user');

// Reducer
function usersReducer(state, action){
    switch (action.type) {
        case 'GET_USERS':
        case 'GET_USERS_SUCCESS':
        case 'GET_USERS_ERROR':
            return usersHandler(state, action);
        case 'GET_USER':
        case 'GET_USER_SUCCESS':
        case 'GET_USER_ERROR':
            return userHandler(state, action);
        default:
            throw new Error(`Unhanded action type: ${action.type}`);
    }
}

// Context 생성
const UserStateContext = createContext(null);
const UserDispatchContext = createContext(null);

// Context Provider
export function UsersProvider({ children }){
    const [state, dispatch] = useReducer(usersReducer, initialState);

    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    )
}

// Use state
export function useUserState(){
    const state = useContext(UserStateContext);

    if( !state ){
        throw new Error("Cannot find UserProvider");
    }

    return state;
}

// Use dispatch
export function useUserDispatch(){
    const dispatch = useContext(UserDispatchContext);

    if( !dispatch ){
        throw new Error("Cannot find UserProvider")
    }

    return dispatch;
}

export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);
export const getUser = createAsyncDispatcher('GET_USER', api.getUser);

//console.log(getUsers);
/*
export async function getUsers(dispatch){
    dispatch({ type : "GET_USERS" });

    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");

        dispatch({ type : "GET_USERS_SUCCESS", data : response.data });
    } catch(e){
        dispatch({ type : "GET_USERS_ERROR", error : e });
    }
}

export async function getUser(dispatch, id){
    dispatch({ type : "GET_USER" });

    try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        dispatch({ type : "GET_USER_SUCCESS", data : response.data });
    } catch(e){
        dispatch({ type : "GET_USER_ERROR", error : e });
    }
}
*/