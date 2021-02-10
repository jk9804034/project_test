const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// 가짜 포스트 목록 데이터
const posts = [
    {
        id: 1,
        title: '리덕스 미들웨어를 배워봅시다',
        done : false
    },
    {
        id: 2,
        title: 'redux-thunk를 사용해봅시다',
        done : false
    },
    {
        id: 3,
        title: 'redux-saga도 사용해봅시다',
        done : false
    }
];

// 포스트 목록을 가져오는 비동기 함수
export const getPosts = async () => {
    await sleep(1000); // 0.5초 쉬고
    
    return posts; // posts 배열
};

// ID로 포스트를 조회하는 비동기 함수
export const getPostById = async id => {
    await sleep(1000); // 0.5초 쉬고
    
    return posts.find(post => post.id === id); // id 로 찾아서 반환
};