import React, { useState, useEffect } from 'react';


const PostList = (token) => {
    const [posts, setPosts] = useState([]);
    useEffect (async () => {
        
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts`,
        {headers:{'Authorization': 'Bearer ' + token}})
        
        const {data} = await response.json();
        console.log (data.posts)
        if (data.success) {
            setPosts(data.posts)
        }
      },[]);

      return <>
      <h2>Posts</h2>
      </>

}

export default PostList;