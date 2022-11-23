import React from 'react'
import './AuthorizationPage.css'
import LoginForm from '../../components/LoginForm/LoginForm'


const AuthorizationPage:React.FC = () => {
    return (
        <div className='Authorization-page'>
            <LoginForm/>
        </div>
    )
}

export default AuthorizationPage