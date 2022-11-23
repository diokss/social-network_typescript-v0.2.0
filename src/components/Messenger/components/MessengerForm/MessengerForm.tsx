import React from 'react'
import './MessengerForm.css'
import Button from "../../../Button/Button"
import Textarea from "../../../Inputs/Textarea/Textarea"

const MessengerForm: React.FC = () => {
    return (
        <div className='Messanger-form'>
            <div className="Messanger-form__textarea-block"><Textarea placeholder='Text here...' className='Messanger-form__textarea-block__textarea'/></div>
            <Button className='Messanger-form__btn primary'>Send</Button>
        </div>
    )
}

export default MessengerForm