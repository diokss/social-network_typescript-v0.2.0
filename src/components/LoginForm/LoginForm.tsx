import React, { useState } from 'react'
import './LoginForm.css'
import LoginInput from '../Inputs/LoginInput/LoginInput'
import PasswordInput from '../Inputs/PasswordInput/PasswordInput'
import Button from '../Button/Button'
import Checkbox from '../Inputs/Checkbox/Checkbox'
import {authService} from '../../store/auth-service'

const LoginForm: React.FC = () => {
    
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [rememberMe,setRememberMe] = useState<boolean>(false)
    console.log(rememberMe);
    
    const handleChangeEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.currentTarget.value)
    }
    const handleChangePassword=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.currentTarget.value)
    }

    const handleChangeRemember=()=>{
        setRememberMe(!rememberMe)
    }

    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        authService.login(
            email,password,rememberMe
        )
        setEmail('')
        setPassword('')
    }
    
    return (
        <form className='Login-form' onSubmit={handleSubmit}>
            <div className='Login-form__title'>Sing In</div>
            <div className="Login-form__directional">Welcome back, you've been missed!</div>
            <div className="Login-form__field"><LoginInput  onChange={handleChangeEmail} value={email} className='Login-form__field__email' placeholder='email'/></div>
            <div className="Login-form__field"><PasswordInput onChange={handleChangePassword} value={password} className='Login-form__field__password' placeholder='passoword'/></div>
            <div className='Login-form__checkbox'><Checkbox onChange={handleChangeRemember} checked={rememberMe}/><span>Remember me</span></div>
            <div className="Login-form__btn"><Button className='primary'>Submit</Button></div>
            <div className='Login-form__register'>
                <span>You haven't any account?</span><a href='https://social-network.samuraijs.com/signUp' target="_blank">Sing Up</a>
            </div>
        </form>
    )
}

export default LoginForm