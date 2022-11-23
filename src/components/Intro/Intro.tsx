import React, { useEffect, useState } from 'react'
import { Contacts } from '../../store/models/profile'
import './Intro.css'


const Intro: React.FC<Contacts> = (props) => {

    const [contacts, setContacts] = useState<{ [key: string]: any }>(props)

    const hasContacts = () => {
        for (let key in contacts) {
            if (contacts[key]) {
                return true
            }
        }
        return false
    }
    useEffect(()=>{
        setContacts(props)
    },[props])
    
    return (
        <div className='Intro'>
            <div className="Intro__title">Intro</div>
            <div className="Intro__link-list">
                {hasContacts() ?
                    <>
                        {contacts.facebook ? <div className='Intro__link-list__element'><span>Facebook: </span><a href={`${contacts.facebook}`}>{contacts.facebook}</a></div> : null}
                        {contacts.website ? <div className='Intro__link-list__element'><span>Website: </span><a href={`${contacts.website}`}>{contacts.website}</a></div> : null}
                        {contacts.vk ? <div className='Intro__link-list__element'><span>VK: </span><a href={`${contacts.vk}`}>{contacts.vk}</a></div> : null}
                        {contacts.twitter ? <div className='Intro__link-list__element'><span>Twitter: </span><a href={`${contacts.twitter}`}>{contacts.twitter}</a></div> : null}
                        {contacts.instagram ? <div className='Intro__link-list__element'><span>Instagram: </span><a href={`${contacts.instagram}`}>{contacts.instagram}</a></div> : null}
                        {contacts.youtube ? <div className='Intro__link-list__element'><span>Youtube: </span><a href={`${contacts.youtube}`}>{contacts.youtube}</a></div> : null}
                        {contacts.github ? <div className='Intro__link-list__element'><span>Github: </span><a href={`${contacts.github}`}>{contacts.github}</a></div> : null}
                        {contacts.mainLink ? <div className='Intro__link-list__element'><span>MainLink: </span><a href={`${contacts.mainLink}`}>{contacts.mainLink}</a></div> : null}
                    </>
                    : <>Нет информации</>
                }
            </div>
        </div>
    )
}

export default React.memo(Intro)