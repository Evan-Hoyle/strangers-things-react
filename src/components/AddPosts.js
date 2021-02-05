import React, { useState } from 'react'

const AddPost = (props) => {
    const {token, posts, setPosts} = props
    const [title, setTitle] = useState ('')
    const [description, setDescription] = useState ('')
    const [price, setPrice] = useState ('')

    const handleSubmit = async (ev) => {
        ev.preventDefault()
        const response = await fetch ('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/posts', 
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json', 
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify ({
                post: {
                    title: title, 
                    description: description,
                    price: price
                }
            })
        })
        const {data} = await response.json()
        setPosts([data.post, ...posts])
        setTitle('')
        setDescription('')
        setPrice('')
    }

    return <form onSubmit={handleSubmit}>
        <input type='text' value={title} placeholder='Title' onChange={(ev)=>{
            setTitle(ev.target.value)
        }}></input>
        <input type='text' value={description} placeholder='Description' onChange={(ev)=>{
            setDescription(ev.target.value)
        }}></input>
        <input type='text' value={price} placeholder='Price' onChange={(ev)=>{
            setPrice(ev.target.value)
        }}></input>
        <button className='submitButton'>Submit Post</button>
    </form>
}

export default AddPost