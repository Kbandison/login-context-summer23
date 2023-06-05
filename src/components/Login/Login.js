import React, { useContext } from 'react'
import {ThemeContext} from '../../context/ThemeContext'
import {LoginContext, LoginDispatchContext} from '../../context/LoginContext'
import './Login.css'

const Login = () => {
  //consume theme context  
  const {theme} = useContext(ThemeContext)

  //consume the login contexts
  const login = useContext(LoginContext)
  const dispatch = useContext(LoginDispatchContext)
    
  return (
    <div id='login' className={theme}>
        <h1>Login</h1> 
        {theme}
        {login}
        
        </div>
  )
}

export default Login