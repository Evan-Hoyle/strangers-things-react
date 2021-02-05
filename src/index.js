import React, { useReducer, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './bootstrap.css';

import {
    AccountForm,
    PostList,
    Profile
  } from './components';
  
  const App = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [user, setUser] = useState({});
    
    React.useEffect(() => {
      localStorage.setItem('token', token);
    }, [token]);

     useEffect (async() => {

      const response = await fetch ('https://strangers-things.herokuapp.com/api/2010-CPU-RM-WEB-PT/users/me', 
      {headers:{'Authorization': 'Bearer ' + token}})
      let data = await response.json()
      console.log(data)
      if (data.success) {
        setUser(data.data)
      } 
    },[token])
  
    return <>
      <h1>
        Strangers Things
      </h1>
      {user.username && <div>Hello {user.username}<button className='logout' onClick={() => {
        setUser({})
        setToken('')
        localStorage.removeItem('token')
      }}>Logout</button></div> }
      <div className='link'>
      <Link to='/login'>Login</Link>
      <Link to='/posts'>Posts</Link>
      {token ? <Link to='/profile'>Profile</Link> : ''}
      </div>
      <Route path="/login">
        <AccountForm type={'login'} setToken={setToken} setUser={setUser}/>
      </Route>
      <Route path= '/register'>
        <AccountForm type={'register'} setToken={setToken} setUser={setUser}/>
      </Route>
      <Route path='/posts'>
        <PostList token={token}/>
      </Route>
      <Route path='/profile'>
        <Profile user={user}/>
      </Route>
    </>
  }
  
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('app'),
  );