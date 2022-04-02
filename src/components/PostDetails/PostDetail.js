import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams();
    const [posts, usePosts] = useState({})

   useEffect(()=>{
    const url=`https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => usePosts(data))
   },[])
    
    return (
        <div>
            <h2>This is post Details Area: </h2>
        </div>
    );
};

export default PostDetail;