import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setPost(json))
    }, [id])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(response => response.json())
            .then(json => setComment(json))
    }, [id])
    return (
        <div>
            <h1>Headline: {post.title}</h1>
            <p>Body: {post.id}</p> <p>{post.body}</p>
            <p>Number Of Comments: {comment.length}</p>
            {
                comment.map(cm=><Comment comment={cm}></Comment>)
            }
        </div>
    );
};

export default PostDetail;