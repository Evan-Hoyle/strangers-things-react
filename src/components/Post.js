const Post = (prop) => {
    const {post} = prop
    return <div className='post'>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <p>{post.price}</p>
        <p>User: {post.author.username}</p>
    </div>
}
export default Post