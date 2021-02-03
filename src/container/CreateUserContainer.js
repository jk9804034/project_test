import React, { useState, useRef } from "react";
import CreateUser from "../page/sample/CreateUser";
import CreateList from "../page/sample/CreateList";
import Alert from "../component/alert/Alert";

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
    const onChange = (e) => {
        const { name, value } = e.target;

        setResult({
            ...result,
            [name] : value
        });
    }

    // 데이터 생성
    const onCreate = () => {
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

        const addObject = {
            id : nextId.current,
            username : username,
            email : email,
            active : false
        }
        setUsers([
            ...users,
            addObject
        ]);
        
        setResult({
            username : "",
            email : ""
        });

        nextId.current += 1;
    }

    // 데이터 삭제
    const onDelete = (id) => {
        setUsers(users.filter(item => item.id !== id));
    }

    // 데이터 토글
    const onToggle = (id) => {
        setUsers(
            users.map((item) => {
                if( item.id === id ){
                    setResult({
                        username : item.username,
                        email : item.email
                    });

                    return { ...item, active : !item.active };
                } else {
                    return { ...item, active : false };
                }
                //return item.id === id ? { ...item, active : !item.active } : { ...item, active : false };
            })
        );
    }

    // 데이터 수정
    const onModify = () => {
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
        for( let i=0; i<users.length; i++ ){
            if( users[i].active ){
                dataLength.current += 1;
            }
        }

        // 선택한 리스트 체크
        if( dataLength.current === 0 ){
            setAlertActive({
                active : true,
                title : "선택한 목록이 없습니다."
            });

            return false;
        }

        setUsers(users.map(( item ) => {
            return item.active ? { ...item, username : username, email : email } : item;
        }));

        setResult({
            username : "",
            email : ""
        });

        dataLength.current = 0;
    }

    // Alert 닫기
    const onAlertClose = () => {
        setAlertActive({
            ...alertActive,
            active : false
        });
    }

    return (
        <div>
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

            {/* Alert */}
            <Alert
                alertActive={alertActive}
                onAlertClose={onAlertClose}
            />
        </div>
    )
}

export default CreateUserContainer;