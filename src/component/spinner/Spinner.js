import React from "react";
import styled, { css } from "styled-components";
import HashLoader from "react-spinners/HashLoader";

function Spinner({
    psLoading
}){
    const HashLoaderForm = styled.div`
        position:fixed;
        left:50%;
        top:50%;
        opacity:0;
        visibility:hidden;
        transform:translate(-50%, -50%);
        transition:all 0.5s;
        z-index:100;
        ${props => 
            props.active &&
            css`
                opacity:1;
                visibility:visible;
            `
        }        
    `;
    const HashLoaderBg = styled.div`
        position:fixed;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background:#000;
        opacity:0;
        visibility:hidden;
        transition:all 0.5s;
        z-index:99;
        ${props => 
            props.active &&
            css`
                opacity:0.6;
                visibility:visible;
            `}
    `;

    return (
        <>
            <HashLoaderForm active={psLoading}>
                <HashLoader color="#36D7B7" size={100} />
            </HashLoaderForm>

            <HashLoaderBg active={psLoading}></HashLoaderBg>
        </>
    )
}

export default Spinner;