import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Counter(){
    return (
        <ul className="menu">
            <li><Link to="/counter">카운터</Link></li>
            <li><Link to="/input">인풋값</Link></li>
        </ul>
    )
}

export default Counter;