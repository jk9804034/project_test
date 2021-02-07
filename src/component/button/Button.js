import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

function Button({ children, size }){
    return (
        <button className={classNames(styles.Button, styles[size])}>{children}</button>
    )
}

Button.defaultProps = {
    size : "medium"
}

export default Button;