import React, { useState, useEffect, Fragment } from 'react';
import Post from './Post'
import AddPosts from './AddPosts'
import DeletePost from './DeletePosts'
import SendMessage from './SendMessage';

const PostList = ({token}) => {

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
      const response = await fetch(`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts`,
        {headers:{'Authorization': 'Bearer ' + token}})
        
        const {data} = await response.json();
        console.log (data.posts)
        setPosts (data.posts)
    }

    useEffect (() => {
        
      fetchPosts()

      },[]);
      return <div className='postList'>
        {token ? <AddPosts token={token} posts={posts} setPosts={setPosts}/>: ''}
      <h2>Posts</h2>

      {
          posts.map ((post) => {
              return <Fragment key={post._id}>
                <Post post={post}/>
                {post.isAuthor ? <DeletePost id={post._id} token={token} fetchPosts={fetchPosts}/> : ''}
                {!post.isAuthor && token ? <SendMessage id={post._id} token={token}/> : ''}
              </Fragment>
          })
      }

      </div>

}

export default PostList;