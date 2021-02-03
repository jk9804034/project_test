import React, { useState } from "react";

function CreateList({
    users,
    onDelete,
    onToggle
}) {
    // 목록 생성
    const list = users.map(( item ) => {
        return (
            <li key={item.id} className={item.active ? "active" : ""}>
                <strong onClick={() => onToggle(item.id)}>{item.username} : </strong>
                {item.email}
                <button type="button" className="button" onClick={() => onDelete(item.id)}>삭제</button>
            </li>
        )
    });

    return (
        <ul className="user_list">
            {list}
        </ul>
    )
}

export default CreateList;