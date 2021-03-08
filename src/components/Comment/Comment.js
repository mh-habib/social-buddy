import React from 'react';

const Comment = (props) => {
    const {id, name, email} = props.comment;
    return (
        <div>
            <p>({id}) Name: {name}</p>
            <p> Email: {email}</p>
        </div>
    );
};

export default Comment;