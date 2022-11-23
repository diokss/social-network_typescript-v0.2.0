import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Intro from '../../components/Intro/Intro'
import UserAvatar from '../../components/UserAvatar/UserAvatar'
import { Profile } from '../../store/models/profile'
import { ProfileApi } from '../../api/api'
import './ProfilePage.css'



const ProfilePage: React.FC = () => {
    const { id } = useParams<{ id?: string }>()
    const [profile, setProfile] = useState<Profile>()
    const [status,setStatus] = useState<string>()

    useEffect(() => {
        if(id){
            ProfileApi.getProfile(id).then(res=>setProfile(res))
            ProfileApi.getStatus(id).then(res=>setStatus(res))
        }
    }, [id])

    if (!profile) return null

    return (
        <div className='Profile-page'>
                <div className='Profile-page__user'>
                    <UserAvatar className='Profile-page__avatar' image={profile.photos.large} />
                    <div className="Profile-page-user__top"></div>
                    <div className="Profile-page-user__bottom">
                        <div className="Profile-page-user__left-container Profile-user-container">
                            <div className="Profile-page-user__name Profile-container-element"><span>{profile.fullName}</span></div>
                            <div className="Profile-page-user__status Profile-container-element"><span>{status}</span></div>
                        </div>
                        <div className="Profile-page-user__right-container Profile-user-container">
                            <Button className='Profile-page-use__right-container__button'>Button</Button>
                        </div>
                    </div>
                </div>
                <div className='Profile-page__content'>
                    <div className="Profile-page__content__intro">
                        <Intro
                            facebook={profile.contacts.facebook}
                            github={profile.contacts.github}
                            instagram={profile.contacts.instagram}
                            mainLink={profile.contacts.mainLink}
                            twitter={profile.contacts.twitter}
                            vk={profile.contacts.vk}
                            website={profile.contacts.website}
                            youtube={profile.contacts.youtube}
                        />
                    </div>
                </div>
        </div>
    )
}

export default ProfilePage