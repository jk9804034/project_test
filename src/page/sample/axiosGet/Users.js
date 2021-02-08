import React, { useState, useEffect } from "react";
import { useUserState, useUserDispatch, getUsers } from './UserContext';
import User from './User';

function Users(){
    const [userId, setUserId] = useState(null);
    const state = useUserState();
    const dispatch = useUserDispatch();

    const { data : users, loading, error } = state.users;

    const fetchData = () => {
        getUsers(dispatch);
    }

    useEffect(() => {
        getUsers(dispatch);
    }, [])
    
    return (
        <>
            {
                loading && <div>로딩중....</div>
            }

            {
                users ? (
                    <>
                        <ul className="ulType">
                            {
                                users.map(( user ) => {
                                    return (
                                        <li
                                            key={user.id}
                                            onClick={() => setUserId(user.id)}
                                            style={{ cursor : "pointer" }}
                                        >
                                            {user.username} ({user.name})
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        {userId && <User id={userId} />}
                    </>
                ) : (
                    <button className="button" onClick={fetchData}>불러오기</button>
                )
            }

            {
                error && <div>에러가 발생했습니다.</div>
            }
        </>
    )
}

export default Users;