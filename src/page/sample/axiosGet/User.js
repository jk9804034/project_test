import React, { useEffect } from 'react';
import { useUserState, useUserDispatch, getUser } from './UserContext';

function User({ id }) {
    const state = useUserState();
    const dispatch = useUserDispatch();

    useEffect(() => {
        getUser(dispatch, id);
    }, [dispatch, id]);

    const { data: user, loading, error } = state.user;

    return (
        <>
            {
                loading && <div>로딩중..</div>
            }

            {
                user && (
                    <>
                        <h2>{user.username}</h2>
                        <p>
                            <b>Email:</b> {user.email}
                        </p>
                    </>
                )
            }

            {
                error && <div>에러가 발생했습니다</div>
            }
        </>
    );
}

export default User;