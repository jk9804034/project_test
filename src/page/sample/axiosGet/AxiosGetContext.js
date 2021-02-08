import React from 'react';
import Users from './Users';
import { UsersProvider } from './UserContext';

function AxiosGet(){
    return (
        <div className="sample">
            <h1>Axios 예제</h1>

            <UsersProvider>
                <Users />
            </UsersProvider>
        </div>
    )
}

export default AxiosGet;