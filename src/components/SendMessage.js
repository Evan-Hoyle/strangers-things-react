import React, {useState} from 'react'

const SendMessage = (props) => {
    const {token, id} = props

    const [message, setMessage] = useState('')

    const handleSubmit = async (ev) => {
        ev.preventDefault()
        const response = await fetch (`https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts/${id}/messages`, {
            method : 'POST',
            headers : {
                'Content-type': 'application/json', 
                'Authorization': `Bearer ${token}` 
            },
            body : JSON.stringify ({
                message : {
                    content : message
                }
            })
        })
        console.log ('message', response)
        setMessage('')
    }

    return <form onSubmit={handleSubmit}>
        <button className='sendButton btn btn-dark btn-sm'>Send Message</button>
        <input type='text' value={message} onChange={(ev) => {
            setMessage(ev.target.value)
        }}></input>
    </form>

}
export default SendMessage