import React, { useEffect, useState } from 'react'
import Messenger from '../../components/Messenger/Messenger'
import './MessengerPage.css'
import MessangerService from '../../store/messenger-sevice'
import { Message } from '../../store/models/message'
import { observer } from 'mobx-react-lite'

const MessengerPage: React.FC = observer(() => {

  const [messages,setMessages] = useState<Message[]>([])

  useEffect(() => {
    MessangerService.makeChannel()
  }, [])

  console.log(MessangerService.chats)

  return (
    <div className='Messenger-page'>
      <div className='Messange-page__messenger'><Messenger /></div>
    </div>
  )
})

export default MessengerPage