import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserApi } from '../../api/api'
import Button from '../Button/Button'
import UserAvatar from '../UserAvatar/UserAvatar'
import './UserCard.css'

export interface UserCardProps{
    id:number,
    name:string,
    photos:{
        small:string|null,
        large:string|null
    },
    status:string|null
    followed:boolean
}



const UserCard: React.FC<UserCardProps> = (
    {followed,name,photos,id,status}
) => {

    const [isFollow,setFollowe]= useState<boolean>(followed)
    const [disable,setDisable] = useState<boolean>(false)

    const toogleFollow= async ()=>{  
        
        setDisable(true)

        if(isFollow)
        {
            await unfollow()
        }
        else 
        {
            await follow()
        }
        
        setDisable(false)
    }

    async function follow() {
        
        const result = await UserApi.follow(id)

        if(result.resultCode !== 1)
        {
            setFollowe(!isFollow)
        }
    }

    async function unfollow() {

        const result = await UserApi.unfollow(id)

        if(result.resultCode !== 1 )
        {
            setFollowe(!isFollow)
        }

    }



    

    return (
        <div className='User-card'>
            <div className="User-card__top">
                <div className="User-card__top__avatar"><UserAvatar className='User-card__top__avatar-image' image={photos.small}/></div>
                <div className="User-card__top__info">
                    <Link to={`/profile/${id}`}  className="User-card__top__info__name"><span>{name}</span></Link>
                    <div className="User-card__top__info__status"><span>{status}</span></div>
                </div>
            </div>
            <div className="User-card__bottom">
                <Button className='User-card__bottom__button'>Messege</Button>
                <Button disabled={disable} onClick={toogleFollow} className={isFollow ?'User-card__bottom__button negative':'User-card__bottom__button primary'}>{isFollow?'Unfollowed':'Follow'}</Button>
            </div>
        </div>
    )
}

export default UserCard