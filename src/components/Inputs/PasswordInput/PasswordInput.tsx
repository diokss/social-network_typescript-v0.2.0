import React, { ChangeEvent, FC, useState } from 'react'
import './PasswordInput.css'
import classNames from 'classnames'
import { Icon } from '@iconify/react';
import {Input} from '../Input'


interface PasswordInputProps {
  className?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  value?: string,
  placeholder?:string
}

const PasswordInput: React.FC<PasswordInputProps> =React.memo((props)=>{
  const [visible, setVisible] = useState(false)
  return(
    <span  className={classNames("Password-input", props.className)}>
      <Input onChange={props.onChange} placeholder={props.placeholder} value={props.value} type={visible ? "text" : "password"} className="Password-input__input"></Input>
      <button className='Password-input__btn' type={'button'} onClick={() => setVisible(!visible)}>
        {visible ? <Icon icon={"akar-icons:eye"}></Icon> : <Icon icon={"akar-icons:eye-closed"}></Icon>}
      </button>
    </span>
  )
})

export default PasswordInput