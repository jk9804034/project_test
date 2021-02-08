import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostList from "./PostList";
import {
    getPosts
} from "../../../store/modules/posts";

function PostListContainer(){
    const dispatch = useDispatch();
    const {
        loading,
        data,
        error
    } = useSelector(state => state.posts.posts);

    useEffect(() => {
        dispatch( getPosts() );
    }, []);

    const evtReload = () => {
        dispatch( getPosts() );
    }

    return (
        <>
            {
                loading && <div>로딩중입니다.</div>
            }

            {
                data && (
                    <PostList
                        psData={data}
                    />
                )
            }

            <button type="button" className="button" onClick={evtReload}>다시 불러오기</button>

            {
                error && <div>에러가 발생했습니다.</div>
            }            
        </>
    )
}

export default React.memo(PostListContainer);