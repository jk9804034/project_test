import React, { useEffect, useReducer } from "react";
import axios from "axios";
import useAsync from "./UseAsync";

const getUser = async () => {
    const response = await axios.get("http://jsonplaceholder.typicode.com/users");

    return response.data;
}

function AxiosGet(){
    const [state, reFetch] = useAsync(getUser, []);
    const { loading, data, error } = state;

    return (
        <div className="sample">
            <h1>Axios 예제</h1>
            {
                loading && <div>로딩중....</div>
            }

            {
                data && (
                    <>
                        <ul className="ulType">
                            {
                                data.map(( user ) => {
                                    return (
                                        <li key={user.id}>
                                            {user.username} ({user.name})
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <button className="button" onClick={reFetch}>
                            다시 불러오기
                        </button>
                    </>
                )
            }

            {
                error && <div>에러가 발생했습니다.</div>
            }
        </div>
    )
}

export default AxiosGet;