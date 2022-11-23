import React from 'react'
import UserAvatar from '../UserAvatar/UserAvatar'
import './HeaderUser.css'
import {authService} from '../../store/auth-service'


interface HeaderUserProps{
    id?:number
    email?:string
    login?:string
}

const HeaderUser: React.FC<HeaderUserProps> = React.memo((props) => {

    const logOut=()=>{
        authService.logout()
    }

    return (
        <div className='Header-user' onClick={logOut}>
           <UserAvatar style={{width:40,height:40}} image='https://wp-s.ru/wallpapers/7/2/554287374001059/devushka-lara-kroft-s-lukom-i-strelami.jpg'/>
            <span>{props.login}</span>
        </div>
    )
})

export default HeaderUser