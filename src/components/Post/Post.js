import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    const handelShowDetails = id =>{
        const url =`/post/${id}`
        history.push(url);

    }
    return (
        <div>
            <h3>({id}) {title}</h3>
            <p>{body}</p>
            <button onClick={()=>handelShowDetails(id)}>Show Details</button>
        </div>
    );
};

export default Post;