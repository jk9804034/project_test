import React from "react";
import "./Alert.css";

function Alert({
    alertActive,
    onAlertClose
}){
    let active = null;
    let activeBg = null;
    let title = alertActive.title;

    if( alertActive.active ){
        active = "alert_active";
        activeBg = "alert_bg_active";
    }

    console.log("Alert 실행");

    return (
        <>
            {/* Alert 레이어 */}
            <div className={`alert ${active}`}>
                <div className="alert_in">
                    <p className="title">{title}</p>
                    <div className="controll_button">
                        <button type="button" onClick={onAlertClose}>확인</button>
                    </div>
                </div>
            </div>

            {/* Alert 레이어 배경 */}
            <div className={`alert_bg ${activeBg}`}></div>
        </>
    )
}

export default React.memo(Alert);