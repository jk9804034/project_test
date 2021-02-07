import React from "react";
import styled, { css, ThemeProvider } from "styled-components";

function StyledCss() {
    const Circle = styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        width:5rem;
        height:5rem;
        font-weight:bold;
        color:#fff;        
        background:${props => props.color || "black"};
        border-radius:50%;
    `;

    const BoxContent = styled.div`
        margin-top:20px;
        padding:5px 10px;
        font-size:14px;
        color:#333;
        border:1px solid #ccc;
        backgorund:#fff;
        cursor:pointer;
        ${props => 
            props.huge &&
            css`
                padding:20px 30px;
            `}
    `;

    const BoxButton = styled.button`
        margin-top:20px;
        padding:20px;
        font-weight:bold;
        font-size:14px;
        color:#fff;
        border:1px solid #ccc;
        backgorund:#fff;
        cursor:pointer;
        ${props => 
            props.huge &&
            css`
                padding:20px 30px;
            `}
        ${props => {
            const selected = props.theme.palette[props.color];

            return css`
                background-color:${selected};
            `;
        }}
    `;

    return (
        <div className="sample">
            <Circle
                color="blue"
            >내용</Circle>

            <BoxContent>생성</BoxContent>
            <BoxContent huge>생성</BoxContent>

            <ThemeProvider
                theme={{
                    palette : {
                        blue : "#228be6",
                        gray : "#495057",
                        pink : "#f06595"
                    }
                }}
            >
                <BoxButton color="gray">생성</BoxButton>
                <BoxButton color="pink">생성</BoxButton>
            </ThemeProvider>
        </div>
    )
}

export default StyledCss;