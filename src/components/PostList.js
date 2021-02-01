import React, { useState, useEffect } from 'react';
import Post from './Post'

const PostList = ({token}) => {
    const [posts, setPosts] = useState([]);
    useEffect (async () => {
        
        const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts`,
        {headers:{'Authorization': 'Bearer ' + token}})
        
        const {data} = await response.json();
        console.log (data.posts)
        setPosts (data.posts)
      },[]);
      return <div className='postList'>
      <h2>Posts</h2>

      {
          posts.map ((post, idx) => {
              return <Post post={post} key={idx}/>
          })
      }

      </div>

}

export default PostList;