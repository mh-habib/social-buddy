import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])
    
    
    return (
        <div>
            <h2>Total Post: {posts.length}</h2>
            {
                posts.map(pd => <Post post={pd}></Post>)
            }
        </div>
    );
};

export default Home;