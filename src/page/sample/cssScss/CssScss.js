import React, { useState } from "react";
import Button from "../../../component/button/Button";
import CheckBox from "./CheckBox.js";

function CssScss(){
    const [check, setCheck] = useState(false);

    const onChange = (e) => {
        console.log(e.target.checked);
        setCheck( e.target.checked );
    }

    const onClick = () => {
        console.log("클릭");
    }

    return (
        <div className="sample">
            <h1>Scss(Scss와 Module를 사용해서 고유한 클래스명 생성) 예제</h1>

            <Button
                size="large"
            >BUTTON</Button>

            <Button
                size="medium"
            >BUTTON</Button>

            <Button
                size="small"
            >BUTTON</Button>

            <CheckBox
                onChange={onChange}
                onClick={onClick}
                checked={check}
            >다음 약관에 모두 동의</CheckBox>
            <p>
                <b>check: </b>
                {check ? 'true' : 'false'}
            </p>
        </div>
    )
}

export default CssScss;