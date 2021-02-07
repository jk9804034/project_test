import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
    loading : false,
    userData : null,
    error : false
}

function reducer(state, action){
    switch(action.type){
        case "LOADING" : 
            return { ...state, loading : true, userData : null };
        case "SUCCESS" :
            return { ...state, loading : false, userData : action.data };
        case "ERROR" :
            return { loading : false, userData : null, error : action.error};
        default :
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function AxiosGet(){
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state);

    // UseEffect 한번 실행
    useEffect(() => {
        fetchUsers();
    }, []);

    // 데이터 호출
    const fetchUsers = async () => {
        try {
            // 초기 로딩중 체크
            dispatch({ type : "LOADING" });

            const response = await axios.get('http://jsonplaceholder.typicode.com/users');

            // 데이터 로드 완료후 저장
            dispatch({ type : "SUCCESS", data : response.data });
        } catch(e){
            dispatch({ type : "ERROR" });
        }
    }

    return (
        <div className="sample">
            <h1>Axios 예제</h1>
            {
                state.loading && <div>로딩중....</div>
            }

            {
                state.userData && (
                    <>
                        <ul className="ulType">
                            {
                                state.userData.map(( user ) => {
                                    return (
                                        <li key={user.id}>
                                            {user.username} ({user.name})
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <button className="button" onClick={fetchUsers}>
                            다시 불러오기
                        </button>
                    </>
                )
            }

            {
                state.error && <div>에러가 발생했습니다.</div>
            }
        </div>
    )
}

export default AxiosGet;