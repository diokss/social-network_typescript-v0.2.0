import React from 'react'
import './Messenger.css'
import classNames from 'classnames'
import MessengerDialog from './components/MessengerDialog/MessengerDialog'
import MessengerChat from './components/MessengerChat/MessengerChat'
import Messages from 'mobx-react-lite'



const Messenger: React.FC = () => {
    return (
        <div className='Messenger'>
            <div className="Messenger__dialogs__list">
                <MessengerDialog className='Messenger__dialogs__list__element'/>
                <MessengerDialog className='Messenger__dialogs__list__element'/>
                <MessengerDialog className='Messenger__dialogs__list__element'/>
                <MessengerDialog className='Messenger__dialogs__list__element'/>
            </div>
            <div className="Messenger__chat"><MessengerChat/></div>
        </div>
    )
}

export default Messenger