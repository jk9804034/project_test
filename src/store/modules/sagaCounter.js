import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

// 액션 타입
const SAGA_INCREASE = 'SAGA_INCREASE';
const SAGA_DECREASE = 'SAGA_DECREASE';
const SAGA_INCREASE_ASYNC = 'SAGA_INCREASE_ASYNC';
const SAGA_DECREASE_ASYNC = 'SAGA_DECREASE_ASYNC';

// 액션 생성 함수
export const sagaIncrease = () => ({ type: SAGA_INCREASE });
export const sagaDecrease = () => ({ type: SAGA_DECREASE });
export const sagaIncreaseAsync = () => ({ type: SAGA_INCREASE_ASYNC });
export const sagaDecreaseAsync = () => ({ type: SAGA_DECREASE_ASYNC });

function* increaseSaga(){
    console.log("increaseSaga");
    yield delay(1000);
    yield put(sagaIncrease());
}
function* decreaseSaga(){
    console.log("decreaseSaga");
    yield delay(1000);
    yield put(sagaDecrease());
}

export function* counterSaga(){
    console.log("counterSaga");
    yield takeEvery(SAGA_INCREASE_ASYNC, increaseSaga);
    console.log("다음");
    yield takeLatest(SAGA_DECREASE_ASYNC, decreaseSaga);
    console.log("마지막");
}

// 초기 상태값
const initialState = 0;

// Reducer
export default function sagaCounter(state = initialState, action) {
    switch (action.type) {
        case SAGA_INCREASE:
            return state + 1;
        case SAGA_DECREASE:
            return state - 1;
        default:
            return state;
    }
}