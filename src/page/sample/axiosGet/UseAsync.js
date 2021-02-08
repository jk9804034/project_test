import { useReducer, useEffect } from "react";

const initialState = {
    loading : false,
    data : null,
    error : false
}

function reducer(state, action){
    switch(action.type){
        case "LOADING" :
            return {
                loading : true,
                data : null,
                error : null
            };
        case "SUCCESS" :
            return {
                loading : false,
                data : action.data,
                error : null
            };
        case "ERROR" :
            return {
                loading : false,
                data : null,
                error : action.error
            };
        default :
            throw new Error(`Unhandled action type : ${action.type}`);
    }
}

function useAsync(callback, deps = []){
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchData = async () => {
        // 초기 로딩중 체크
        dispatch({ type : "LOADING" });

        try {
            const data = await callback();

            // 데이터 로드 완료후 저장
            dispatch({ type : "SUCCESS", data : data });
        } catch(e){
            dispatch({ type : "ERROR", error : e });
        }
    }
    
    useEffect(() => {
        fetchData();
    }, deps);

    return [state, fetchData];
}

export default useAsync;