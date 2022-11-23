import React from 'react'
import { Input } from '../Input'
import './LoginInput.css'

interface LoginInputProps{
    className?:string,
    value?:string,
    placeholder?:string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const LoginInput: React.FC<LoginInputProps> = React.memo(({className,value,placeholder,onChange}) => {

    return (
        <span className='Login-input'>
            <Input onChange={onChange} placeholder={placeholder} value={value} className='Login-input__input'/>
        </span>
    )
})

export default LoginInput