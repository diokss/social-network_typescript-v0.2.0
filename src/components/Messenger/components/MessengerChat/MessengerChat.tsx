import React from 'react'
import UserAvatar from '../../../UserAvatar/UserAvatar'
import './MessengerChat.css'
import classNames from 'classnames'
import Textarea from '../../../Inputs/Textarea/Textarea'
import Button from '../../../Button/Button'
import MessengerForm from '../MessengerForm/MessengerForm'

let authUserId = 19902

interface Message {
    userId?: number
    className?: string
}


const Message: React.FC<Message> = ({ className, userId }) => {
    return (
        <div className={userId === authUserId ? classNames('Message My-message', className) : classNames('Message', className)}>
            <div className="Message__avatar"><UserAvatar className='Message__avatar__user-avatar'/></div>
            <div className={userId === authUserId ? 'Message__one-message my-message' : 'Message__one-message companion-message'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nulla fugiat quis ratione reprehenderit nemo odio architecto nam inventore magnam expedita nobis assumenda officiis, voluptatum ad id iusto laborum? Provident.</div>
        </div>
    )
}




const MessengerChat: React.FC = () => {
    return (
        <div className='Messenger-chat'>
            <div className="Messenger-chat__message-list">
                <Message className='Messenger-chat__message-list__element' userId={19901} />
                <Message className='Messenger-chat__message-list__element' userId={19902} />
                <Message className='Messenger-chat__message-list__element' userId={19901} />
                <Message className='Messenger-chat__message-list__element' userId={19901} />
            </div>
            <div className='Messenger-chat__form-block'>
                <MessengerForm/>
            </div>
        </div>
    )
}

export default MessengerChat