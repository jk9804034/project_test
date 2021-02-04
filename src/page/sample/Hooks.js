import React, { useEffect } from "react";

function Hooks(){
    // 항상 실행
    useEffect(() => {
        
    });
    // componentDidMount 기능
    useEffect(() => {
        return () => { // componentWillUnmount 기능

        }
    }, []);
    
    return (
        <div className="sample">
            <h1>Hooks 예제</h1>
            
        </div>
    )
}

export default Hooks;