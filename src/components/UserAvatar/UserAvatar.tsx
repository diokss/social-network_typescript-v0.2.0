import React from 'react'
import './UserAvatar.css'
import classNames from 'classnames'
import defaultUserAvatar from '../../assets/images/UserAvatar.jpg'


interface UserAvatarProps{
    image?:string|null,
    className?:string
    style?:React.CSSProperties
}


const UserAvatar: React.FC<UserAvatarProps> = ({image,className,style}) => {
    return <img style={style} className={classNames('User-avatar',className)} src={!image ? defaultUserAvatar: image}/>
}

export default UserAvatar