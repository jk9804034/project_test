import React, { useState } from "react";

function CreateUser({
    username,
    email,
    onChange,
    onCreate,
    onModify
}) {
    return (
        <div className="sample">
            <h1>유저정보 추가 예제</h1>
            <input
                className="input_text input_first"
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                className="input_text input_last"
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate} className="input_button">등록</button>
            <button onClick={onModify} className="input_button">수정</button>
        </div>
    )
}

export default CreateUser;