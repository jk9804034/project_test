import React from "react";

function PostList({
    psData
}){
    const dataList = psData.map(( item ) => {
        return (
            <li key={item.id}>{item.title}</li>
        )
    });

    return (
        <ul className="ulType">
            {dataList}
        </ul>
    )
}

export default React.memo(PostList);