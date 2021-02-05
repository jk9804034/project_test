import React, { useState, useRef, useMemo, useCallback } from "react";
import CreateUser from "../page/sample/CreateUser";
import CreateList from "../page/sample/CreateList";
import Alert from "../component/alert/Alert";

function countActiveUsers(users){
    console.log("사용자 체크");
    return users.filter(item => item.active).length;
};

function CreateUserContainer(){
    // Alert 데이터
    const [alertActive, setAlertActive] = useState({
        active : false,
        title : ""
    });
    // 입력 데이터
    const [result, setResult] = useState({
        username : "",
        email : ""
    });
    // 데이터
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active : false
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active : false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active : false
        }
    ]);

    const { username, email } = result;

    // 변수 생성
    const nextId = useRef(4);
    const dataLength = useRef(0);

    // Input Change 이벤트
    const onChange = useCallback((e) => {
        const { name, value } = e.target;

        setResult({
            ...result,
            [name] : value
        });
    }, [result]);

    // 데이터 생성
    const onCreate = useCallback(() => {
        // 계정명이 있는지 체크
        if( username === "" ){
            setAlertActive({
                active : true,
                title : "계정명을 입력해주세요."
            });

            return false;
        }

        // 이메일이 있는지 체크
        if( email === "" ){
            setAlertActive({
                active : true,
                title : "이메일을 입력해주세요."
            });

            return false;
        }

        // 추가할 객체 생성
        const addObject = {
            id : nextId.current,
            username : username,
            email : email,
            active : false
        }
        // 객체 추가
        setUsers(users => ([
            ...users,
            addObject
        ]));
        
        // Input 값 초기화
        setResult({
            username : "",
            email : ""
        });

        // 생성된 객체의 ID값을 위해 증가
        nextId.current += 1;
    }, [username, email, alertActive]);

    // 데이터 삭제
    const onDelete = useCallback((id) => {
        setUsers(users.filter(item => item.id !== id));
    }, [users]);

    // 데이터 토글
    const onToggle = useCallback((id) => {
        setUsers(
            users.map((item) => {
                if( item.id === id ){
                    if( !item.active ){
                        setResult(result => ({
                            username : item.username,
                            email : item.email
                        }));
                    } else {
                        setResult(result => ({
                            username : "",
                            email : ""
                        }));
                    }

                    return { ...item, active : !item.active };
                } else {
                    return { ...item, active : false };
                }
                //return item.id === id ? { ...item, active : !item.active } : { ...item, active : false };
            })
        );
    }, [users]);

    // 데이터 수정
    const onModify = useCallback(() => {
        // 계정명이 있는지 체크
        if( username === "" ){
            setAlertActive({
                active : true,
                title : "계정명을 입력해주세요."
            });

            return false;
        }

        // 이메일이 있는지 체크
        if( email === "" ){
            setAlertActive({
                active : true,
                title : "이메일을 입력해주세요."
            });

            return false;
        }

        // 리스트의 active가 true가 있는지 확인
        dataLength.current = users.filter(item => item.active).length;

        // 선택한 리스트 체크
        if( dataLength.current === 0 ){
            setAlertActive({
                active : true,
                title : "선택한 목록이 없습니다."
            });

            return false;
        }

        // 데이터 수정
        setUsers(users => 
            users.map(( item ) => {
            if( item.active ){
                if( item.username === username && item.email === email ){
                    setAlertActive({
                        active : true,
                        title : "데이터 목록이 동일합니다."
                    });

                    return { ...item, active : false };
                } else {
                    return { ...item, username : username, email : email, active : false };
                }
            } else {
                return item;
            }
        }));

        // Input 값 초기화
        setResult({
            username : "",
            email : ""
        });

        // 리스트 활성화 변수 초기화
        dataLength.current = 0;
    }, [username, email, alertActive]);

    // Alert 닫기
    const onAlertClose = useCallback(() => {
        setAlertActive({
            ...alertActive,
            active : false
        });
    }, [alertActive]);

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <>
            {/* 데이터 정보 추가 */}
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
                onModify={onModify}
            />

            {/* 데이터 정보 리스트 */}
            <CreateList
                users={users}
                onDelete={onDelete}
                onToggle={onToggle}
            />

            <div>활성사용자 수 : {count}</div>

            {/* Alert */}
            <Alert
                alertActive={alertActive}
                onAlertClose={onAlertClose}
            />
        </>
    )
}

export default CreateUserContainer;