const Profile = (props) => {
    
    const {user} = props
    console.log (user)
    const hasMessages = user.messages && user.messages.length > 0
    return <div className='profile'>
        <h3>Profile</h3>
        <h4>Messages</h4>
        {
            hasMessages ? user.messages.map((message, idx) => {
                return <div className='message' key={idx}>
                    <h5>Subject: {message.post.title}</h5>
                    <p>{message.content}</p>
                    <p>From: {message.fromUser.username}</p>
                </div>
            }) : ''
        }
    </div>

}

export default Profile