import React from "react";

function User({
    username,
    email,
    onChange,
    onCreate,
    //onModify
}) {
    console.log(username, email);
    return (
        <>
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
            {/*
            <button onClick={onModify} className="input_button">수정</button>
            */}
        </>
    )
}

export default React.memo(User);