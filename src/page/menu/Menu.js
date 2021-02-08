import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Counter(){
    return (
        <>
            <ul className="menu">
                <li><Link to="/counter">카운터</Link></li>
                <li><Link to="/input">인풋값</Link></li>
                <li><Link to="/user">유저추가</Link></li>
                <li><Link to="/hooks">Hooks</Link></li>
                <li><Link to="/immer">Immer</Link></li>
                <li><Link to="/scss">SCSS</Link></li>
                <li><Link to="/styled">Styled Css</Link></li>
                <li><Link to="/todo">Todo</Link></li>
                <li><Link to="/axios">Axios</Link></li>
                <li><Link to="/axios_context">Axios Context</Link></li>
                <li><Link to="/redux">Redux</Link></li>
                <li><Link to="/middleware">Middleware</Link></li>
            </ul>
        </>
    )
}

export default Counter;